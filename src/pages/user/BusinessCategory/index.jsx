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
    if (userData.categories.length <= 0) {
      header.setIsArrow(false)
    }else{
      header.setIsArrow(true)
    }
  }, [])



 
  useEffect( () => {
    getTrueCategories()
  }, [allCategories])

  const goToNextPage = (newUser) => {
    let body = []
    categories.map(cat => cat.isActive === true ? body.push(cat) : null)
    apiCalls('put', '/user/edit-biz', { categories: body }).then(res => {
      console.log(res);
      setUserData(res)
      if (typeof res === 'object') localStorage.user = JSON.stringify(res)
      newUser ? navigate('/projects')
        : navigate('/setting')
    }).catch(err => console.log(err))

  }

  function getTrueCategories() {
    console.log('us ',userData?.categories);
    if(userData?.categories.length <= 0){
      setCategories(allCategories)
    }else{
    let tempCategories = allCategories
    let result = []
    for (let userCat of userData?.categories) {
      result = tempCategories.map(cat =>{
        return cat._id === userCat._id ?({ ...cat, isActive: true }) : cat
      })
      tempCategories = result
    }
    setCategories(result)
  }
  }

  const handleClick = (name) => {
    const result = categories.map(elem => elem.categoryName === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
    setCategories(result)
  }

  return (<>
    <div className={styles.title}><UserTitle text1={`${userData?.firstName}, ${language.AREAS_PRACTICE} ${userData?.bizName}?`} /></div>
      {categories?.map(elem => <div className={styles.buttons} key={Math.random().toString()}><BtnCheckBox name={elem.categoryName} id={elem.categoryName} key={elem.categoryName} handleClick={handleClick} isActive={elem.isActive} /></div>)}
    {/* במידה וזה משתמש חדש צריך למשוך לו את הקטגוריות הדיפולטיביות מהדאטא בייס. אם זה משתמש קיים אז למשוך לו מהפרטי יוזר */}
    {/* //  {newUser? console.log("dd"):
  {/* //   // {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />}} */}

    <BtnSubmitIcon color='orange' icon={userData?.categories.length <= 0 ? 'Arrow.svg' : 'v to text.svg'} func={() => goToNextPage(userData?.categories.length <= 0 ? true : false)} />
  </>)
}
