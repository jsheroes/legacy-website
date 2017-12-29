const RawHtml = ({ content, className }) => (
  <div>
    <div className={`content ${className || ''}`} dangerouslySetInnerHTML={{ __html: content }} />
    <style jsx global>{ `
        ul {
            padding-left: 40px !important;
        }
    ` }
    </style>
  </div>
);

export default RawHtml;
