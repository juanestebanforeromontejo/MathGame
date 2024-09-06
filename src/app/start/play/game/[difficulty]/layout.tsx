import QuestionDisplayer from "./components/QuestionDisplayer";

interface Questions {
  question: string,
  answers: string[],
  correct: string,
}

async function get_questions(difficulty: string): Promise<Questions[]> {
  const response = await fetch(`http://localhost:8080/${difficulty}`, {
    method: "GET",
  });

  return response.json();
}

export default async function Layout({params}: {params: {difficulty: string}}) {
  let questions = await get_questions(params.difficulty);

  console.log(questions);

  return (
    <div>
      <div className="bg-gray-800 p-5 flex flex-col">
        <QuestionDisplayer questions={questions}/>
      </div>
    </div>
  )
}
