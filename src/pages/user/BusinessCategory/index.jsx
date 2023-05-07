import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BtnCheckBox from '../../../components/common/BtnCheckBox'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import UserTitle from '../../../components/common/UserTitle'
import mainContext from '../../../context/mainContext'
import userContext from '../../../context/userContext'
import apiCalls from '../../../functions/apiRequest'
import styles from './style.module.css'

const BusinessCategory = () => {
  const navigate = useNavigate();
  const { header, language } = useContext(mainContext)
  const { userData, setUserData } = useContext(userContext)

  const [allCategories, setAllCategories] = useState([])
  const [categories, setCategories] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    header.setIsTitle(false)
    header.setIsArrow(userData?.categories.length !== 0)
    header.setIsHeaderSet(false)
    // userData.categories.length <= 0 ? header.setIsArrow(false) : header.setIsArrow(true)
    const getCategories = async () => {
      await apiCalls('get', '/user/get-all-categories')
        .then(res => {
          setAllCategories(res)
        })
        .catch(err => console.log("🚀 ~ file: index.jsx ~ line 29 ~ getCategories ~ err", err))
    }
    getCategories()
  }, [])

  useEffect(() => {
    if (userData?.categories.length <= 0) {
      setCategories(allCategories)
    }
    else {
      let tempCategories = allCategories
      let result = []
      for (let userCat of userData?.categories) {
        result = tempCategories.map(cat => cat._id === userCat._id ? ({ ...cat, isActive: true }) : cat)
        tempCategories = result
      }
      setCategories(result)
    }
  }, [allCategories])

  const goToNextPage = (newUser) => {
    let body = []
    categories.map(cat => cat.isActive === true ? body.push(cat) : null)
    setIsLoading(true)
    apiCalls('put', '/user/edit-biz', { categories: body })
      .then(res => {
        setUserData(res)
        // if (typeof res === 'object') 
        localStorage.user = JSON.stringify(res)
        newUser ? navigate('/projects') : navigate('/setting')
      })
      .catch(err => console.log("🚀 ~ file: index.jsx ~ line 48 ~ goToNextPage ~ err", err))
  }

  const handleClick = (name) => {
    const result = categories.map(elem => elem.categoryName === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
    setCategories(result)
  }

  return (
    <>
      <div className={styles.title}>
        <UserTitle text1={`${userData?.firstName}, ${language.AREAS_PRACTICE} '${userData?.bizName}'?`} />
      </div>
      {categories?.map(elem =>
        <div className={styles.buttons} key={Math.random().toString()}>
          <BtnCheckBox
            name={elem.categoryName}
            id={elem.categoryName}
            key={elem.categoryName}
            handleClick={handleClick}
            isActive={elem.isActive} />
        </div>)}
      {/* במידה וזה משתמש חדש צריך למשוך לו את הקטגוריות הדיפולטיביות מהדאטא בייס. אם זה משתמש קיים אז למשוך לו מהפרטי יוזר */}
      <BtnSubmitIcon
        color='orange'
        icon={userData?.categories.length <= 0 ? 'Arrow.svg' : 'v to text.svg'}
        func={() => goToNextPage(userData?.categories.length <= 0 ? true : false)}
        isLoading={isLoading} />
    </>)
}
export default BusinessCategory