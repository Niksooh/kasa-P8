import { Banner } from "../../components/Banner/banner";
import PropTypes from 'prop-types'


export function Home({data}) {
  const background = "src/assets/images/Image-source-1.jpg"
  const figcaption = "Chez vous, partout et ailleurs"

  return <>
    <Banner background={background} caption={figcaption}/>
    <section className="home_content">
    </section>
  </>
}

Home.propTypes = {
  data: PropTypes.array
}