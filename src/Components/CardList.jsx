import {motion} from "framer-motion";
export function CardList(props){
    return <div>
        <div className='grid grid-cols-2 gap-10 my-10'>
               <div className='col-span-2 md:col-span-1'>
               <motion.img whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className="rounded-lg cursor-pointer" src={props.img1}></motion.img>
               </div>
               <motion.div whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}} className='col-span-2 lg:col-span-1'>
               <h1 className='text-2xl text-left bg-gradient-to-r from-purple-300 to-purple-800 text-transparent bg-clip-text'>{props.title1}</h1><br></br>

               <p className='text-left pb-10 text-sm text-gray-200'>{props.content1}</p>
               <button className="rounded-md bg-gradient-to-r from-red-500 to-purple-500 px-4 py-2">{props.button1}</button>
               </motion.div>
            </div>
        
            <div className='grid grid-cols-2 gap-10 my-10'>
               <motion.div whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}} className='col-span-2 lg:col-span-1'>
               <h1 className='text-2xl text-left pt-5 bg-gradient-to-r from-purple-300 to-purple-800 text-transparent bg-clip-text'>{props.title2}</h1><br></br>
               <p className='text-left pb-16 text-sm text-gray-200'>{props.content2}</p>
               <button className="rounded-md bg-gradient-to-r from-red-500 to-purple-500 px-4 py-2">{props.button2}</button>
               </motion.div>
               <div className='col-span-2 md:col-span-1'>
               <motion.img whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}} className="rounded-lg cursor-pointer" src={props.img2}></motion.img>
               
               
               </div>
            </div>
    </div>
}