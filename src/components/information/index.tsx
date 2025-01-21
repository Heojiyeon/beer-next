/**
 * @returns 프로젝트 설명 컴포넌트
 */
export default function Information() {
  return (
    <div className="text-card-description">
      <p className="text-pageHead mb-10">프로젝트 설명</p>

      <div className="text-title leading-loose ">
        <p>
          Next.js를 학습해보고 싶었어요. (근데 이제 15의 신기술을 찍먹해보는...)
        </p>
        <p>Reat 19의 다양한 변경점을 적용해보고 싶었어요.</p>
        <p>Vercel, Github Action을 활용한 배포 자동화를 경험해보고 싶었어요.</p>
        <p>PWA를 경험하고, 또 Storybook을 스스로 구축해 사용해보고 싶었어요.</p>
      </div>
    </div>
  );
}
