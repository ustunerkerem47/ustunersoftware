import { useEffect, useRef } from 'react'
import { WebGLRenderer, Scene, PerspectiveCamera, SphereGeometry, MeshBasicMaterial, Mesh } from 'three'

export default function Globe({ radius = 1.35, opacity = 0.16, speed = 0.0025 }) {
  const box = useRef(null)
  useEffect(() => {
    const el = box.current
    let renderer
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)
    const scene = new Scene()
    const camera = new PerspectiveCamera(75, 1, 0.1, 100)
    camera.position.z = 3
    const geo = new SphereGeometry(radius, 64, 64)
    const mat = new MeshBasicMaterial({ color: '#f1efea', transparent: true, opacity, wireframe: true })
    const mesh = new Mesh(geo, mat)
    scene.add(mesh)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const resize = () => {
      const { width, height } = el.getBoundingClientRect()
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.position.z = width < 640 ? 3.9 : 3
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)
    let raf
    let visible = true
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(el)
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      if (!reduce) {
        mesh.rotation.y += speed
        mesh.rotation.x += speed * 0.3
        mesh.rotation.z += speed * 0.1
      }
      renderer.render(scene, camera)
    }
    tick()
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      geo.dispose()
      mat.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [radius, opacity, speed])
  return <div ref={box} className="globe" aria-hidden="true" />
}
