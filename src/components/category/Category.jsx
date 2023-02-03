import './category.css'
import Images from './images'

const Category = () => {
  return (
    <>
        <section className='section__category'>
            <div className='category'>
              <h3 className='category__title'>categorias</h3>
              <div className="category__container">
                  {
                    Images.map((value, index) => {
                      return (
                        <div className="category__box" key={index}>
                          <div className="box__image">
                            <img src={value.categoryImg} alt={value.name} />
                          </div>
                        </div>
                      )
                    })
                  }
              </div>
            </div>
        </section>
    </>
  )
}

export default Category

