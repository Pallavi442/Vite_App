
function MessageComp() {
    console.log(import.meta.env.VITE_DB_PASS)
  return (
    <div>
        <h3>{import.meta.env.VITE_SOME_KEY}</h3>
    </div>
  )
}

export default MessageComp