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
    [allCategories, setAllCategories] = useState([]),
    { userData, setUserData } = useContext(userContext),
    [categories, setCategories] = useState([]),
    navigate = useNavigate();
  const getCategories = async () => {
    await apiCalls('get', '/user/get-all-categories')
      .then( res => {
        console.log(1234, res);
        setAllCategories(res)
      }).catch(err => console.log('my error: ', err))
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
    console.log(categories);
  }, [])



 
  useEffect( () => {
    getTrueCategories()
  }, [allCategories])


  useEffect(() => {
    console.log('abx ', categories);
  }, [categories])

  const goToNextPage = (newUser) => {
    let body = []
    categories.map(cat => cat.isActive === true ? body.push(cat) : null)
    console.log(1997, body);
    apiCalls('put', '/user/edit-biz', { categories: body }).then(res => {
      console.log(res);
      setUserData(res)
      if (typeof res === 'object') localStorage.user = JSON.stringify(res)
      newUser ? navigate('/projects')
        : navigate('/setting')
    }).catch(err => console.log(err))

  }

  function getTrueCategories() {
    if(userData?.categories === []) return
    userData.categories = userData.categories.map(cat => ({...cat, isActive:true}))
    console.log('categ', userData.categories);
    // console.log(12345678, categoryName);
    let tempCategories = allCategories
    let result = []
    for (let userCat of userData?.categories) {
      result = tempCategories.map(cat =>{
        console.log('cat ',cat);
        console.log('user ', userCat)
        console.log('all ', result)
        return cat._id === userCat._id ?({ ...cat, isActive: true }) : cat
      })
      tempCategories = result
      // console.log(12, catName, 34, userCategories);
    }
    setCategories(result)
    console.log('res ',result);
  }

  const handleClick = (name) => {
    console.log('abx ', categories);
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
