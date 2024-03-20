export default function Heart({ enabled }: any) {
  return (
    <div>
      {enabled ? (
        '🩷'
      ) : (
        '🤍'
      )}
    </div>
  );
}
