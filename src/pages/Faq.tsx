import React from 'react'
import './css/Faq.css'
import FaqItem from '../components/FaqItem/FaqItem'

const Faq = () => {
    return (
        <>
            <main className='faq-main'>
                <div className="faq-main-content">
                    <h1 className="faq-main-title">Faq's</h1>
                    <p className="faq-main-desc">Home / Faq</p>
                </div>
            </main>
            <section className='faq-bl faq-bl-first'>
                <h2 className="faq-bl-title">Every Question Answered</h2>
                <div className="faq-bl-box d-f jc-sb align-center">
                    <div className="faq-bl-content d-f">
                        <FaqItem
                            question='What is the Hipcouch Interior Design Service?'
                            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec velit blandit, laoreet elit in, luctus elit. Aliquam pulvinar euismod metus in pharetra. Sed a lacinia lacus, at volutpat tortor. Sed aliquet urna a pretium fringilla. In eu dignissim augue, et pulvinar nisl. Fusce sagittis pellentesque mi sit amet pellentesque. Donec ac elit ut orci egestas aliquam.'
                        />
                        <FaqItem
                            question='So, how exactly does this work?'
                            answer='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.'
                        />
                        <FaqItem
                            question='What cities do you currently operate in?'
                            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat vel eros non egestas. Curabitur quis arcu a nulla aliquet fringilla vel non libero. Quisque rutrum vitae felis ut malesuada. Praesent id ullamcorper ipsum. Nulla fermentum metus sit amet eros eleifend vulputate. Etiam vestibulum aliquam magna, at sagittis nisl. Integer consequat augue ac malesuada blandit. In egestas eu diam sit amet hendrerit. Aliquam a gravida augue. Nullam id scelerisque dolor. Nullam varius dictum lectus, id finibus arcu fermentum ac. Sed venenatis ultrices fringilla. Praesent pharetra nibh quis volutpat eleifend. Phasellus nulla nulla, consectetur ut elit at, porttitor fringilla quam.'
                        />
                        <FaqItem
                            question='Hipcouch Interior Design Service?'
                            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus velit id neque gravida, ut tristique magna tincidunt. Duis vitae interdum magna, eget fringilla sem. Morbi convallis vestibulum ornare. Etiam varius tempus placerat. Donec efficitur, ante id ultricies mollis, ante metus efficitur sapien, vel vulputate tellus quam vitae quam. Etiam bibendum turpis ac laoreet convallis. Quisque eu orci egestas, viverra lectus et, suscipit neque. Fusce laoreet erat a faucibus auctor. In fringilla risus a arcu facilisis, et posuere risus tincidunt. Cras vitae lorem posuere, maximus risus ac, commodo neque. Aenean consectetur pharetra pharetra. Fusce in dignissim lorem. Curabitur vel mattis eros.'
                        />
                        <FaqItem
                            question='What kind of interior designers do you have?'
                            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus tellus sed metus blandit malesuada. Maecenas vestibulum quis leo in rhoncus. Nullam nunc felis, vulputate ac iaculis ultrices, efficitur quis velit. Nulla vitae neque finibus, dapibus eros non, auctor dui. Proin tincidunt ex ac eleifend aliquam. Suspendisse potenti. Pellentesque porttitor dictum eros eget vestibulum. Nam consectetur odio a eleifend pretium. Phasellus tortor augue, ultricies aliquam rhoncus in, luctus ac lorem. Donec ut convallis ex. Donec laoreet consectetur metus vel tempor. Mauris venenatis justo sit amet risus dictum mattis. Curabitur eu ultricies diam.'
                        />
                    </div>
                    <div><img src="/images/faq1.png" alt="faq1" /></div>
                </div>
            </section>
            <section className='faq-bl faq-bl-second'>
                <h2 className="faq-bl-title">Project related questions</h2>
                <div className="faq-bl-box d-f jc-sb align-center">
                    <div className="faq-bl-content d-f">
                        <FaqItem
                            question='How long does it take?'
                            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan risus ac purus tempus, accumsan laoreet lacus lobortis. Morbi iaculis odio non magna venenatis, id facilisis ligula ullamcorper. Vivamus consectetur fermentum leo at varius. Quisque odio quam, aliquet in varius non, tincidunt a tellus. Curabitur pulvinar ipsum leo, vel dictum nunc ornare a. Phasellus ultricies libero diam, at ultricies purus tincidunt non. Fusce semper vehicula justo, a dapibus arcu. Curabitur sapien diam, imperdiet sit amet condimentum a, vulputate eleifend dui. Nullam quis enim arcu. Aliquam erat volutpat. Suspendisse quis orci dui. Sed laoreet egestas aliquam. Aenean rutrum molestie felis, a tempus ante commodo vitae. Quisque varius pulvinar risus, ac imperdiet justo faucibus sed. Aliquam pulvinar mi varius accumsan dictum. Maecenas turpis dolor, ultricies non lobortis et, fringilla ullamcorper ipsum.'
                        />
                        <FaqItem
                            question='Can I use my existing furnishings?'
                            answer='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.'
                        />
                        <FaqItem
                            question='I put into redesigning my interior?'
                            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non pulvinar mauris. Integer gravida sem ut molestie lacinia. Donec nec ultrices nisl. Donec gravida aliquet ex et vehicula. Nulla a vestibulum elit. Etiam ac mi ut enim rhoncus commodo. Vivamus at justo elit. Nam sagittis ornare enim, ut aliquet enim aliquam nec. Sed imperdiet tempor metus, vitae posuere orci finibus et. Vivamus euismod risus ante, vitae dictum risus pretium eget. Quisque egestas, neque eu semper malesuada, orci lorem pretium metus, eu aliquam leo urna vitae neque. Curabitur eu ex arcu. Phasellus lectus nunc, malesuada ac rhoncus eu, tincidunt vel quam.'
                        />
                        <FaqItem
                            question='What do your services cost?'
                            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus justo nec ante sagittis, nec sollicitudin urna accumsan. Phasellus id condimentum est. Vestibulum in sapien maximus, scelerisque leo sed, interdum metus. Curabitur vitae gravida velit, a ornare eros. Sed tempor lorem vitae odio iaculis, et luctus odio venenatis. Nunc et nulla at justo imperdiet efficitur et sed elit. Pellentesque vehicula nec sem nec cursus. Nam porta, dui ac faucibus pellentesque, neque massa pellentesque massa, non dignissim turpis mi eu risus. Curabitur vitae fermentum nibh, sed scelerisque urna. Donec turpis metus, suscipit sed sapien id, auctor malesuada urna. Nam congue arcu non est maximus ultrices. Aenean ut enim molestie, finibus ris'
                        />
                        <FaqItem
                            question='Do you offer free consultations?'
                            answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet nisl sed arcu euismod, in tincidunt eros accumsan. Etiam varius leo neque, vel egestas felis eleifend at. Mauris sit amet elit tristique, tempor nunc tincidunt, ultrices sapien. Quisque id diam dui. Cras rhoncus sapien eget libero varius, eu tincidunt velit lacinia. Fusce maximus, purus eget rhoncus maximus, justo velit rutrum ligula, vel maximus quam nulla lobortis velit. Praesent eu eros ut odio pellentesque varius. Praesent sollicitudin, lectus vitae aliquam vehicula, neque libero vehicula felis, sed rhoncus dolor nisl eu est. Nunc a mattis dui, quis sagittis libero. Donec suscipit vel nibh ac porttitor. Etiam porta maximus imperdiet.'
                        />
                    </div>
                    <div><img src="/images/faq2.png" alt="faq2" /></div>
                </div>
            </section>
        </>
    )
}

export default Faq