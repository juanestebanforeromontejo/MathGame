import React from 'react'
interface Props {
  answerCorrect: boolean,
}

const CorrectScreen = (props: Props) => {
  return (
    <div>
          {props.answerCorrect ? (
            <h1 className="h1 text-gray-300">Your answer is correct! :)</h1>
          ) : (
            <h1 className="h1 text-gray-300">Your answer is incorrect! :(</h1>
          )}
    </div>
  )
}

export default CorrectScreen
