import React, { useState, useEffect, useRef, useMemo } from 'react';
import Nav from './Nav';
import Home from './Home';
import Menu from './Menu';
import Footer from './Footer';
import Delivery from './Delivery';
import Spacer from './Spacer';

const App = () => {
    const homeRef = useRef()
    const menuRef = useRef()
    const deliveryRef = useRef()

    
    const [secViz, setSecViz] = useState('home')
    let obvResults = []

    function callbackFunc(entries){
        entries.forEach(entry => {
            let obj = {}
            obj['id'] = entry.target.id
            obj['intersection'] = entry.isIntersecting
            obvResults.push(obj)
        })
        let lastEntry = obvResults[obvResults.length-1]
        let { id , intersection } = lastEntry
        if(intersection === false){
            for(let i=obvResults.length-2; i>=0; --i){
                if(obvResults[i]['intersection'] == true && obvResults[i]['id'] != id){
                    setSecViz(obvResults[i]['id'])
                    break
                }
            }
        }
        if(intersection === true){
            setSecViz(id)
        }
    }
    const options = {
        root:null,
        rootMargin:"-65px",
        threshold:0
    }

    useEffect(()=>{
        const list = [homeRef.current, menuRef.current, deliveryRef.current]
        const observer = new IntersectionObserver(callbackFunc, options)
        list.forEach(el=>{observer.observe(el)})
    }, [])

    return (
        <div className='w-full h-screen'>
            <div className='h-9/10'>
                <Home id='home' ref={homeRef}/>
                <Menu id='menu' ref={menuRef}/>
                <Delivery id='delivery' ref={deliveryRef}/>
                <Footer />
                <Spacer />
            </div>
            <Nav sectionsVisible={secViz}/>
        </div>
    );
};

export default App;

