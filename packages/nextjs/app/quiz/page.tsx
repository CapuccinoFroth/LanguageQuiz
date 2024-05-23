import type { NextPage } from "next";
import Link from 'next/link';
import Image from "next/image";
import DE_Flag from '~~/public/DE-Germany-Flag-icon.png';
import ES_Flag from '~~/public/ES-Spain-Flag-icon.png';


const QuizDetails: NextPage = () => {

  return (
    <>
     
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Language Quizzes</h1>
        <p className="text-neutral">
          Choose a quiz to take.
          <br /> <br /> 
          
          <Link href='/spanish'>
         <button className="btn btn-primary">
         <Image
            src={ES_Flag}
            width="50"
            height="50"
            alt="german"
            className="rounded-xl border-4 border-primary"
          />
          Spanish Quiz</button>
          </Link>
          <br /> 
          <Link href='/german'>
          <button className="btn btn-primary">
          <Image
            src={DE_Flag}
            width="50"
            height="50"
            alt="german"
            className="rounded-xl border-4 border-primary"
          />
          German Quiz</button>
          </Link>
         
        </p>
      </div>
    </>
  );
};

export default QuizDetails;
