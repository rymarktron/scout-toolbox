const faqs = [
    {
        id: 1,
        question: "What is the goal of The Scout Toolbox",
        answer:
          "To share the experiences and knowledge from different Youth and Scouters with the world. This should be a go to place for Canadian Scouts to learn more on outdoor skills and all other things relating to Scouting.",
      },
      {
        id: 2,
        question: "Who is the Scout Toolbox for?",
        answer:
          "It is for all levels of Scouts and Scouters. The idea of the Toolbox is to be a place for all different skills. Which tools you need is dependent on the person, and we are here for everyone.",
      },
      {
        id: 3,
        question: "Can I contribute to the Scout Toolbox?",
        answer:
          "For sure! You can do this by filling out the feedback form or emailing thescouttoolbox.com to have a conversation.",
      },
      {
        id: 4,
        question: "Are there are other sites that you recommend?",
        answer:
          "For sure! You can do this by filling out the feedback form or emailing thescouttoolbox.com to have a conversation.",
      },    
    ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-500">
              Questions, questions, questions. We love questions!

            </p>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-3 text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }