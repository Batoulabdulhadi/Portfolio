import './HeadTitleSec.css'

const HeadTitleSec = ({titleSec, titleDetails , spanWord , btnSub , btnImage}) => {
  return (
    <div className='hader-projects'>
       <div className='header-text-project'>
        <p>{titleSec}</p>
        <h1>
        {titleDetails} <span>{spanWord}</span>
        </h1>
       </div>
      {btnSub && <button className='primary-btn btn-and-icon'><a href='https://github.com/Batoulabdulhadi' target='_blank'>{btnSub}</a>{btnImage &&<img src={btnImage} className='go-arrow' />} </button>}
      </div>
  )
}

export default HeadTitleSec
