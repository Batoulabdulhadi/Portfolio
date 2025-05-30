import './EduAndExpDetailes.css'

const EduAndExpDetailes = ({titleParagraph1,firstParagraph, titleParagraph2 ,secParagraph}) => {
  return (
    
    <div className='experiance-and-edu'>
    <div className='img-separator'>
        <img src='../../../public/assets/images/image-sepaaretor.png'/>
    </div>
    <div className='info-detailes-box'>
        <div className='specific-info'>
        <h2 className="title-paragrraph">{titleParagraph1}</h2>
        <p>{firstParagraph}</p>
        </div>
        <div className='specific-info'>
        <h2 className="title-paragrraph">{titleParagraph2}</h2>
        <p>{secParagraph}</p>
        </div>
        
    </div>
</div>
  )
}

export default EduAndExpDetailes
