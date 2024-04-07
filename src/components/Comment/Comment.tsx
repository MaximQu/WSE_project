import st from "./styles.module.scss";

const Comment = () => {
  return (
    <div className={st.comment}>
      <p className={st.text}></p>
      <div className={st.wrapper}>
        <span className={st.name}></span>
        <span className={st.position}></span>
      </div>
    </div>
  )
}

export default Comment
