import scaleImg from '@/images/scale.jpg'
import Hero from '@/components/hero'

export default function ScalePage() {
    return (
        <Hero 
          imgData={scaleImg}
          imgAlt='Scale factory'
          title="Professional Cloud Hosting"
        
        />
    )
}