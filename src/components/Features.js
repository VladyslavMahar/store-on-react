import React from 'react'

export default function Features() {
  return (
    <div className='features'>
        <h3>Фічі</h3>
        <h2>Короткий опис наших переваг</h2>
        <div className='flex-box'>
            <div className='box-1'>
                <img src='./img/fast.png' alt='fast' />
                <h3>Швидко</h3>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
            </div>
            <div className='box-2'>
                <img src='./img/safety.png' alt='fast' />
                <h3>Безпечно</h3>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
            </div>
            <div className='box-3'>
                <img src='./img/comfort.png' alt='fast' />
                <h3>Комфортно</h3>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
            </div>
        </div>
    </div>
  )
}
