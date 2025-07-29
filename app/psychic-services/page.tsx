import PsychicServicesClient from "@/components/psychic-services-client"
import { psychicServices, testimonials } from "@/utils/psychicServicesData"

const PsychicServicesPage = async () => {
  return <PsychicServicesClient services={psychicServices} testimonials={testimonials} />
}

export default PsychicServicesPage
