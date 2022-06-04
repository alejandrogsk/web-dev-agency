import React from 'react'


const MethodologySection = ({methodology}) => {
  const { before_title, title, methods_list } = methodology;

  return (
    <section className='home-ms px-layout'>
      <div className='home-ms__content'>
        <h6>{before_title}</h6>
        <h2>{title}<span className="orange-point">.</span></h2>

        <div className='home-ms__content-grid'>
          {
            methods_list.map((element,i ) => (
              <div key={i} className='home-ms__content-grid--item '>
                <span className=''>{element.number}</span>
                <h3 className=''>{element.title}</h3>
                <p className=''>{element.content}</p>
              </div>
            ))
          }
        </div>

      </div>
      <svg className='home-ms__svg-1' width="1000" height="921" viewBox="0 0 1000 921" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M999.641 498.849C991.957 693.494 810.289 810.813 625.397 872.135C435.762 935.029 210.903 958.683 87.9121 801.234C-45.6911 630.199 -18.0068 387.773 110.312 212.739C236.848 40.138 455.211 -43.2235 658.943 22.3199C864.449 88.4343 1008.16 283.138 999.641 498.849Z" fill="url(#paint0_linear_461_2)"/>
<defs>
<linearGradient id="paint0_linear_461_2" x1="1000" y1="460.143" x2="0" y2="460.143" gradientUnits="userSpaceOnUse">
<stop stopColor="#F84525"/>
<stop offset="1" stopColor="#FFC300"/>
</linearGradient>
</defs>
</svg>
<svg className='home-ms__svg-2' width="1000" height="921" viewBox="0 0 1000 921" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M999.641 498.849C991.957 693.494 810.289 810.813 625.397 872.135C435.762 935.029 210.903 958.683 87.9121 801.234C-45.6911 630.199 -18.0068 387.773 110.312 212.739C236.848 40.138 455.211 -43.2235 658.943 22.3199C864.449 88.4343 1008.16 283.138 999.641 498.849Z" fill="url(#paint0_linear_461_2)"/>
<defs>
<linearGradient id="paint0_linear_461_2" x1="1000" y1="460.143" x2="0" y2="460.143" gradientUnits="userSpaceOnUse">
<stop stopColor="#F84525"/>
<stop offset="1" stopColor="#FFC300"/>
</linearGradient>
</defs>
</svg>

<svg className='home-ms__svg-3'  width="324" height="97" viewBox="0 0 324 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_461_7)">
<rect x="4" width="15" height="15" rx="7.5" fill="white"/>
<rect x="64" width="15" height="15" rx="7.5" fill="white"/>
<rect x="124" width="15" height="15" rx="7.5" fill="white"/>
<rect x="184" width="15" height="15" rx="7.5" fill="white"/>
<rect x="244" width="15" height="15" rx="7.5" fill="white"/>
<rect x="304" width="15" height="15" rx="7.5" fill="white"/>
<rect x="4" y="74" width="15" height="15" rx="7.5" fill="white"/>
<rect x="64" y="74" width="15" height="15" rx="7.5" fill="white"/>
<rect x="124" y="74" width="15" height="15" rx="7.5" fill="white"/>
<rect x="184" y="74" width="15" height="15" rx="7.5" fill="white"/>
<rect x="244" y="74" width="15" height="15" rx="7.5" fill="white"/>
<rect x="304" y="74" width="15" height="15" rx="7.5" fill="white"/>
<rect x="4" y="37" width="15" height="15" rx="7.5" fill="white"/>
<rect x="64" y="37" width="15" height="15" rx="7.5" fill="white"/>
<rect x="124" y="37" width="15" height="15" rx="7.5" fill="white"/>
<rect x="184" y="37" width="15" height="15" rx="7.5" fill="white"/>
<rect x="244" y="37" width="15" height="15" rx="7.5" fill="white"/>
<rect x="304" y="37" width="15" height="15" rx="7.5" fill="white"/>
</g>
<defs>
<filter id="filter0_d_461_7" x="0" y="0" width="328" height="97" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_461_7"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_461_7" result="shape"/>
</filter>
</defs>
</svg>

    </section>
  )
}

export default MethodologySection