import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

// 이전 페이지로 돌아가는 훅
export const useGoBack = () => {
  const navigate = useNavigate()
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])
  return goBack
}
