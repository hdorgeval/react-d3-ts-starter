import * as d3 from 'd3';

export const renderD3 = (d3Container: React.MutableRefObject<null>, data: string): void => {
  if (d3Container.current === undefined || d3Container.current === null) {
    return;
  }
  const svg = d3.select(d3Container.current);
  svg
    .append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 50)
    .attr('fill', 'lightblue');
  svg
    .append('text')
    .text(data)
    .attr('x', 20)
    .attr('y', 60)
    .style('fill', 'purple')
    .attr('font-size', '3em');
};
