import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './dg.css'

const Dg = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = svg.attr('height');

    const treeLayout = d3.tree().size([height, width-100]);
    const root = d3.hierarchy(data);
    treeLayout(root);

    const links = root.links();
    const linkPathGenerator = d3
      .linkVertical()
      .x(d => d.x)
      .y(d => d.y/5);

    svg
      .selectAll('.link')
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', d => linkPathGenerator(d))
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    svg
      .selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('circle')
      .attr('fill','grey')
      .attr('stroke','steelblue')
      .attr('stroke-width',2)
      .attr('class', 'node')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y/5)
      .attr('r', 20);
  }, [data]);

  return <svg ref={svgRef} width="100%" height={800}></svg>;
};

export default Dg;