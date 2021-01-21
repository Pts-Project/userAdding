import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [ema, setema] = useState('')
  const [pas, setpass] = useState('')
  const [con , setcon] = useState('')
  const [ski, setski] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day,ema,pas,con,ski, reminder })

    setText('')
    setDay('')
    setema('')
    setpass('')
    setski('')
    setcon('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>User Name</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>email</label>
        <input
          type='text'
          placeholder='Add ema'
          value={ema}
          onChange={(e) => setema(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Password</label>
        <input
          type='text'
          placeholder='Add Password'
          value={pas}
          onChange={(e) => setpass(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Contact No.</label>
        <input
          type='text'
          placeholder='Add Contact'
          value={con}
          onChange={(e) => setcon(e.target.value)}
        />
        </div>
       
        <div className='form-control'>
        <label>Skills</label>
        <input
          type='text'
          placeholder='Add Skills'
          value={ski}
          onChange={(e) => setski(e.target.value)}
        />
        </div>
      <div className='form-control form-control-check'>
        <label>Admin</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save User/Admin' className='btn btn-block' />
    </form>
  )
}

export default AddTask
