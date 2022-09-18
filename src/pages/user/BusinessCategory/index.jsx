import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BtnCheckBox from '../../../components/common/BtnCheckBox'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import UserTitle from '../../../components/common/UserTitle'
import mainContext from '../../../context/mainContext'
import userContext from '../../../context/userContext'
import apiCalls from '../../../functions/apiRequest'
import styles from './style.module.css'

export default function BusinessCategory() {

  const [language, setLanguage] = useState(JSON.parse(localStorage.language)),
    { header } = useContext(mainContext),
    { userData, setUserData } = useContext(userContext),
    [categories, setCategories] = useState([]),    navigate = useNavigate();
  const getCategories = async()=>{
    await apiCalls('get', '/user/get-all-categories')
    .then(res=>{
      console.log(1234, res);
      setCategories(res)
    }).catch(err=>console.log('my error: ', err))
  }

  useEffect(() => {
    getCategories()
    header.setIsTitle(false)
    header.setIsHeaderSet(false)
    setLanguage(JSON.parse(localStorage.language))
    if (!userData.categories) {
      header.setIsArrow(false)
    }
  console.log(userData?.categories);
  getTrueCategories()
  console.log(categories);
  }, [])

  const goToNextPage = (newUser) => {
    let body = []
    categories.map(cat=> cat.isActive === true ? body.push(cat) : null)
    console.log(1997, body);
    apiCalls('put', '/user/edit-biz', { categories: body }).then(res => {
      console.log(res);
      setUserData(res)
      if(typeof res === 'object') localStorage.user = JSON.stringify(res)
      newUser ? navigate('/projects')
        : navigate('/setting')
    }).catch(err => console.log(err))

  }

  function getTrueCategories(){
    const categoryName = userData?.categories.map(cat=>cat.categoryName)
    console.log(categoryName);
   const result = categoryName.map(nam=> categories.map(cat=>cat.categoryName === nam? ({...cat, isActive: true}): cat))
  //  const result1 = categories.map(cat=> categoryName.map(nam=>cat.categoryName === nam? ({...cat, isActive: true}): cat))
   console.log(result);
  }

  const handleClick = (name) => {
    const result = categories.map(elem => elem.categoryName === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
    setCategories(result)
    console.log(1234, categories);
  }

  return (<>
    <div className={styles.title}><UserTitle text1={`${userData?.firstName}, ${language.AREAS_PRACTICE} ${userData?.bizName}?`} /></div>
    {categories?.map(elem => <div className={styles.buttons} key={Math.random().toString()}><BtnCheckBox name={elem.categoryName} id={elem.categoryName} key={elem.categoryName} handleClick={handleClick} isActive={elem.isActive} /></div>)}
    {/* במידה וזה משתמש חדש צריך למשוך לו את הקטגוריות הדיפולטיביות מהדאטא בייס. אם זה משתמש קיים אז למשוך לו מהפרטי יוזר */}
    {/* //  {newUser? console.log("dd"):
  {/* //   // {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />}} */}

    <BtnSubmitIcon color='orange' icon={userData?.categories === [] ? 'Arrow.svg' : 'v to text.svg'} func={() => goToNextPage(userData?.categories === [] ? true : false)} />
  </>)
}
