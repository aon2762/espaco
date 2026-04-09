export default function TestParam({ params }: { params: { param: string } }) {
  return <div>Param is: {params.param}</div>;
}