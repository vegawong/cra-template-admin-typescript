import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTitle, change, changeTitleAsync } from 'stores/globalSlice'

import { Button } from 'antd'

import styles from './style.module.less'

const Home: React.FC = () => {
  const title = useSelector(selectTitle)
  const dispatch = useDispatch()
  // 同步action更改
  const handleChangeTitle = useCallback(() => {
    dispatch(change('changed'))
  }, [dispatch])

  // 异步action更改
  const handleAsyncChange = useCallback(() => {
    dispatch(changeTitleAsync('async-changed'))
  }, [dispatch])
  return (
    <div>
      <h1 className={styles.title}>Hello {title}</h1>
      <Button onClick={handleChangeTitle}>同步更改</Button>
      <Button onClick={handleAsyncChange}>异步更改</Button>
    </div>
  )
}

export default Home
