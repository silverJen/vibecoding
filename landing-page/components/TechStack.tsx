export default function TechStack() {
  const techStack = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      icon: "⚛️",
    },
    {
      category: "Backend",
      items: ["Next.js API Routes"],
      icon: "🔧",
    },
    {
      category: "AI",
      items: ["OpenAI Whisper", "OpenAI GPT"],
      icon: "🤖",
    },
    {
      category: "Storage",
      items: ["Browser Local Storage"],
      icon: "💾",
    },
  ];

  return (
    <section id="techstack" className="py-24 bg-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span className="text-sm font-medium text-primary-700">기술 스택</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              기술 스택
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              현대적인 기술로 구축된 안정적인 플랫폼
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-center">
                      <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* 아키텍처 설명 */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border-2 border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              아키텍처 개요
            </h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              Next.js를 기반으로 한 풀스택 애플리케이션입니다. 
              프론트엔드는 React와 TypeScript로 구축되었으며, 
              AI 기능은 OpenAI의 Whisper(음성 전사)와 GPT(대화 및 초고 생성)를 활용합니다. 
              MVP 단계에서는 브라우저 로컬 스토리지를 사용하여 세션을 관리합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
