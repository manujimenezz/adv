import { useEffect, useRef, useState } from 'react'

type GoogleMapProps = {
  lat: number
  lng: number
  zoom?: number
}

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()

  const existingScript = document.querySelector<HTMLScriptElement>(
    'script[data-source="google-maps-js"]',
  )

  if (existingScript && (window as any).google?.maps) {
    return Promise.resolve()
  }

  if (existingScript && !existingScript.dataset.loaded) {
    return new Promise((resolve, reject) => {
      existingScript.addEventListener('load', () => resolve())
      existingScript.addEventListener('error', () => reject(new Error('Google Maps failed to load')))
    })
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=3.55`
    script.async = true
    script.defer = true
    script.dataset.source = 'google-maps-js'

    script.addEventListener('load', () => {
      script.dataset.loaded = 'true'
      resolve()
    })

    script.addEventListener('error', () => {
      reject(new Error('Google Maps failed to load'))
    })

    document.head.appendChild(script)
  })
}

export default function GoogleMap({ lat, lng, zoom = 16 }: GoogleMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      setError('Falta la clave de Google Maps. Defínala en VITE_GOOGLE_MAPS_API_KEY.')
      return
    }

    let cancelled = false

    loadGoogleMapsScript(apiKey)
      .then(() => {
        if (cancelled) return
        if (!containerRef.current) return

        const google = (window as any).google
        if (!google?.maps) {
          setError('No se ha podido inicializar Google Maps.')
          return
        }

        const center = { lat, lng }

        const map = new google.maps.Map(containerRef.current, {
          center,
          zoom,
          disableDefaultUI: true,
          zoomControl: true,
          clickableIcons: false,
          gestureHandling: 'greedy',
          styles: [
            // Fondo y geometría en dark theme
            {
              elementType: 'geometry',
              stylers: [{ color: '#050815' }],
            },
            // Texto general en claro pero muy discreto
            {
              elementType: 'labels.text.fill',
              stylers: [{ color: '#9fa7c0' }],
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#020512' }],
            },
            // Carreteras
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#20263c' }],
            },
            {
              featureType: 'road.local',
              elementType: 'geometry',
              stylers: [{ color: '#2b3550' }],
            },
            {
              featureType: 'road',
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }],
            },
            // Agua
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#071629' }],
            },
            // Ocultar puntos de interés / locales y sus etiquetas
            {
              featureType: 'poi',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'poi.business',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'poi.attraction',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'poi.school',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'poi.medical',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'poi.park',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
            // Transporte
            {
              featureType: 'transit',
              stylers: [{ visibility: 'off' }],
            },
          ],
        })

        new google.maps.Marker({
          position: center,
          map,
          title: 'Advin Capital',
        })
      })
      .catch(() => {
        if (!cancelled) {
          setError('No se ha podido cargar el mapa.')
        }
      })

    return () => {
      cancelled = true
    }
  }, [lat, lng, zoom])

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-navy">
      <div ref={containerRef} className="w-full h-full" />
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-navy/90 px-6 text-center">
          <p className="text-sm text-white/70">{error}</p>
        </div>
      ) : null}
    </div>
  )
}

