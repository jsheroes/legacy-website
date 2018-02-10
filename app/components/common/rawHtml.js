const RawHtml = ({ content, className, className1 }) => (
  <div className={className1}>
    <div className={`content ${className || ''}`} dangerouslySetInnerHTML={{ __html: content }} />

    {/* language=CSS */}
    <style jsx global>{ `
        .w-max-width {
          width: auto;
          max-width: 700px;
        }
        .w-mt-30 {
          margin-top: 30px;
        }
        .content ul {
          padding-left: 40px !important;
        }
        .p-mb-30 p {
          margin-bottom: 30px;
        }
    ` }
    </style>
  </div>
);

export default RawHtml;
