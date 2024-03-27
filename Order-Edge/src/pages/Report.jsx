function Report() {
  const url = 'https://plus.unsplash.com/premium_photo-1683842190286-204c3d93a5f6?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <div>
            <img
                className='rounder-sm'
                src={url}
                alt='Customer is coming'
            />
        </div>
  )
}

export default Report