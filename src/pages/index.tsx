// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

//import Profile from './qcomps/profile_mistake'
//import MyComp from "./qcomps/firstcomp"
//import Bio from "./qcomps/bios"
//import TodoList from "./qcomps/todos"
//import Profile from './components/profile_props'
//import Profile from './qcomps/gallery_props'
//import PackingList from './qcomps/props_item'
//import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
export default function Home() {
  return (
    <div>
      {/* <Profile /> */} {/* fixed profile_mistake.tsx */}
      {/* <MyComp /> */} {/* fixed firstcomp.tsx */}
      {/*<Bio /> */} {/* fixed bios.tsx */}
      {/*<TodoList /> */} {/* fixed todos.tsx */}
      {/*<Profile /> */} {/* display profile_props.tsx */}  
      {/*<Profile /> */} {/* fixed gallery_props.tsx */}
      {/*<PackingList /> */} {/* display props_item.tsx */}
      {/*<List /> */} {/* display list_keys_id.tsx */}
      <RecipeList /> {/* display recipes.tsx */}
    </div>
   
  )
}
