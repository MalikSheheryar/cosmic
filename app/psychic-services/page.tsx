import { client } from '@/lib/sanity'
import PsychicServicesClient from '@/components/psychic-services-client'

interface PsychicService {
  _id: string
  title: string
  icon: string
  description: string
  features: string[]
  price: string
  rating: number
  specialists: number
}

interface Testimonial {
  _id: string
  name: string
  service: string
  rating: number
  text: string
}

async function getPsychicServicesData() {
  const servicesQuery = `*[_type == "psychicService"] | order(orderRank asc) {
    _id, title, icon, description, features, price, rating, specialists
  }`
  const testimonialsQuery = `*[_type == "testimonial"] | order(publishedAt desc) [0...3] {
    _id, name, service, rating, text
  }`

  const [services, testimonials] = await Promise.all([
    client.fetch<PsychicService[]>(servicesQuery),
    client.fetch<Testimonial[]>(testimonialsQuery),
  ])

  return { services, testimonials }
}

const PsychicServicesPage = async () => {
  const { services, testimonials } = await getPsychicServicesData()
  return (
    <PsychicServicesClient services={services} testimonials={testimonials} />
  )
}

export default PsychicServicesPage
