(()=>{const t=t=>{const o=function(t,e,n,o,i){return this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.notes=i,{title:t,description:e,dueDate:n}}(t[0].value,t[1].value,t[2].value,t[3].value,t[4].value);n.addTodo(o),e.addNewTodo(o)},e={addNewTodo:t=>{const e=document.getElementById("list-todos"),n=document.createElement("li");n.innerHTML=`\n      <div class="todo-information">\n        <h3 class="todo-title">${t.title}</h3>\n        <span class="todo-description">${t.description}</h3>\n      </div>\n    `;const o=document.createElement("ul");o.classList.add("list-buttons");const i=document.createElement("li"),d="http://www.w3.org/2000/svg",c=document.createElementNS(d,"svg");i.appendChild(c),c.setAttributeNS(null,"viewBox","0 0 512 512"),c.setAttributeNS(null,"width",18),c.setAttributeNS(null,"height",18);const s=document.createElementNS(d,"path");c.appendChild(s),s.setAttributeNS(null,"d","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z");const l=document.createElement("li"),a=document.createElementNS(d,"svg");l.appendChild(a),a.setAttributeNS(null,"viewBox","0 0 448 512"),a.setAttributeNS(null,"width",18),a.setAttributeNS(null,"height",18);const r=document.createElementNS(d,"path");a.appendChild(r),r.setAttributeNS(null,"d","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"),o.append(i,l),n.appendChild(o),e.append(n)}};document.getElementById("btn-create-todo").addEventListener("click",(t=>{t.preventDefault()})),(()=>{const e=document.getElementById("dashboard"),n=document.getElementById("dashboard-todos-list"),o=document.createElement("form");e.insertBefore(o,n),o.id="form-create-todo";const i=["title","description","due-date","priority","notes"];for(let t=0;t<i.length;t++){const e=i[t],n=document.createElement("label");if(n.setAttribute("for",e),"title"===e||"description"===e){const t=document.createElement("input");n.innerHTML=`${e.slice(0,1).toUpperCase()+e.slice(1)}:`,t.id=e,t.setAttribute("name",e),t.type="text",t.maxLength=49,o.append(n,t)}else if("due-date"===e){n.innerHTML="Due Date:";const t=document.createElement("input");t.id=e,t.setAttribute("name",e),t.type="date",o.append(n,t)}else if("priority"===e){n.innerHTML="Priority:";const t=document.createElement("select");t.setAttribute("name",e);const i=document.createElement("option");i.setAttribute("value","low"),i.innerHTML="Low";const d=document.createElement("option");d.setAttribute("value","medium"),d.innerHTML="Medium";const c=document.createElement("option");c.setAttribute("value","high"),c.innerHTML="High",t.append(i,d,c),o.append(n,t)}else{n.innerHTML="Notes:";const t=document.createElement("textarea");t.id=e,t.setAttribute("name",e),t.setAttribute("rows",5),t.setAttribute("cols",33),t.placeholder="Contact Justin at...",o.append(n,t)}}const d=document.createElement("button");d.id="button-submit",d.type="submit",d.innerHTML="Create Todo",d.addEventListener("click",(e=>{e.preventDefault(),t(o.elements)})),o.appendChild(d)})();const n=function(t){this.name=t;let e=[];return{name:t,addTodo:t=>{e.push(t)},todos:e}}("today")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDZnhELEtBQUt3RCxLQUFPQSxFQUNaLElBQUlDLEVBQVEsR0FNWixNQUFPLENBQUVELE9BQU1wRCxRQUpFRyxJQUNma0QsRUFBTUMsS0FBS25ELEVBQUssRUFHTWtELFFBQzFCLENBb0txQkUsQ0FBUSxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdWlsZCBmcm9tIHRoZSBpbnNpZGUgb3V0ICovXG5cbi8qIFRvIERPIEFwcCAqL1xuXG4vKiBcbiAgVG8gRG8gT2JqZWN0XG4gIENvbnN0cnVjdG9yXG4gIHtcbiAgICBUaXRsZTogJ0hlbGxvJ1xuICAgIERlc2NyaXB0aW9uOiAnSGVsbG8gaSBuZWVkIHRvIGRvIHRoaXMnXG4gICAgRHVlIERhdGU6IE1NL0REL1lZWVlcbiAgICBwcmlvcml0eTogTG93L01lZC9IaWdoXG4gICAgbm90ZXM6ICdmamtkYWZqa2FkO2wnXG4gIH1cblxuICBUb0RvIENvbnRyb2xsZXJcblxuICBDUlVEXG4gIENyZWF0ZSBUb2RvXG4gIFJlYWQgVG9kb1xuICBVcGRhdGUgVG9kb1xuICBEZWxldGUgVG9kb1xuKi9cblxuZnVuY3Rpb24gVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG5cbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlIH07XG59XG5cbmZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgYWRkVG9kbywgdG9kb3MgfTtcbn1cblxuLy8gRGFzaGJvYXJkXG5cbi8vIExpc3Qgb2YgUHJvamVjdHNcblxuLy8gTGlzdCBvZiBUb2RvcyBmb3IgdGhlIGRheT8gXG5cbi8vIEFsbCBUb2Rvc1xuXG4vLyBUb2RvcyBiYXNlZCBvbiBwcmlvcml0eT9cblxuLy8gQWJpbGl0eSB0byBjcmVhdGUvdXBkYXRlL2RlbGV0ZSB0b2RvLlxuXG4vLyBBYmlsaXR5IHRvIGNyZWF0ZS91cGRhdGUvZGVsZXRlIHByb2plY3RcblxuLy8gRmlyc3QgaW50ZXJmYWNlIGlzIFRvZGF5cyBUb2Rvc1xuXG5jb25zdCBjcmVhdGVET00gPSAoKSA9PiB7XG4gIGNvbnN0IGJ0bkNyZWF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNyZWF0ZS10b2RvJyk7XG5cbiAgYnRuQ3JlYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlICdOZXcgVG9kbycgRm9ybSBhbmQgYXBwZW5kIHRvIERvbS5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGRpdkRhc2hib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXNoYm9hcmQnKTtcbiAgY29uc3QgZGFzaGJvYXJkVG9kb3NMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rhc2hib2FyZC10b2Rvcy1saXN0Jyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIFxuICBkaXZEYXNoYm9hcmQuaW5zZXJ0QmVmb3JlKGZvcm0sIGRhc2hib2FyZFRvZG9zTGlzdCk7XG4gIGZvcm0uaWQgPSAnZm9ybS1jcmVhdGUtdG9kbyc7XG5cbiAgY29uc3QgaW5wdXRzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkdWUtZGF0ZScsICdwcmlvcml0eScsICdub3RlcyddO1xuIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGlucHV0TmFtZSA9IGlucHV0c1tpXTtcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0TmFtZSk7XG5cbiAgICBpZiAoaW5wdXROYW1lID09PSAndGl0bGUnIHx8IGlucHV0TmFtZSA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYCR7aW5wdXROYW1lLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBpbnB1dE5hbWUuc2xpY2UoMSl9OmA7XG4gICAgICBpbnB1dC5pZCA9IGlucHV0TmFtZTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgaW5wdXQubWF4TGVuZ3RoID0gNDk7XG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXROYW1lID09PSAnZHVlLWRhdGUnKSB7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSAnRHVlIERhdGU6JztcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LmlkID0gaW5wdXROYW1lO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIGlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXROYW1lID09PSAncHJpb3JpdHknKSB7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSAnUHJpb3JpdHk6JztcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbkxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgb3B0aW9uTG93LmlubmVySFRNTCA9ICdMb3cnO1xuXG4gICAgICBjb25zdCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbk1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgb3B0aW9uTWVkaXVtLmlubmVySFRNTCA9ICdNZWRpdW0nO1xuXG4gICAgICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb25IaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgb3B0aW9uSGlnaC5pbm5lckhUTUwgPSAnSGlnaCc7XG5cbiAgICAgIHNlbGVjdC5hcHBlbmQob3B0aW9uTG93LCBvcHRpb25NZWRpdW0sIG9wdGlvbkhpZ2gpO1xuICAgICAgZm9ybS5hcHBlbmQobGFiZWwsIHNlbGVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdOb3RlczonO1xuICAgICAgY29uc3QgdGV4dEFyZWEgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHRleHRBcmVhLmlkID0gaW5wdXROYW1lO1xuICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsIDUpO1xuICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgMzMpO1xuICAgICAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnQ29udGFjdCBKdXN0aW4gYXQuLi4nO1xuXG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgdGV4dEFyZWEpO1xuICAgIH1cbiAgfVxuXG4gIC8qIFN1Ym1pdCBpbnB1dCAqL1xuICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuU3VibWl0LmlkID0gJ2J1dHRvbi1zdWJtaXQnO1xuICBidG5TdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICBidG5TdWJtaXQuaW5uZXJIVE1MID0gJ0NyZWF0ZSBUb2RvJztcblxuICBidG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBGb3JtQ29udHJvbGxlci5jcmVhdGVUb2RvKGZvcm0uZWxlbWVudHMpO1xuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG59XG5cbi8vIGZvcm1EYXRhIHJldHVybnMgYSA2IGVsZW1lbnQgSFRNTCBDb2xsZWN0aW9uXG4vLyBXZSBpdGVyYXRlIHRvIDUsIHdoaWxlIHNraXBwaW5nIHRoZSBsYXN0IG9uZSBiZWNhdXNlIHRoYXQgaXMgdGhlIHN1Ym1pdCBidXR0b24uXG5jb25zdCBGb3JtQ29udHJvbGxlciA9IHtcbiAgY3JlYXRlVG9kbzogKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvRG8oZm9ybURhdGFbMF0udmFsdWUsIGZvcm1EYXRhWzFdLnZhbHVlLCBmb3JtRGF0YVsyXS52YWx1ZSwgZm9ybURhdGFbM10udmFsdWUsIGZvcm1EYXRhWzRdLnZhbHVlKTtcbiAgICBwcm9qZWN0VG9kYXkuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICBEb21VcGRhdGVyLmFkZE5ld1RvZG8obmV3VG9kbyk7XG4gIH1cbn07XG5cbmNvbnN0IERvbVVwZGF0ZXIgPSB7XG4gIGFkZE5ld1RvZG86ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdG9kb3MnKTtcbiAgICBcbiAgICBjb25zdCBsaXN0SXRlbVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtVG9kby5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwidG9kby1pbmZvcm1hdGlvblwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0b2RvLnRpdGxlfTwvaDM+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1kZXNjcmlwdGlvblwiPiR7dG9kby5kZXNjcmlwdGlvbn08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBcbiAgICAvLyBBZGQgZWRpdCBhbmQgZGVsZXRlIGJ1dHRvbnMgdG8gdG9kbyBsaXN0IGl0ZW0uXG4gICAgY29uc3QgbGlzdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2xpc3QtYnV0dG9ucycpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgY29uc3Qgc3ZnQnRuV2lkdGggPSAxODtcbiAgICBjb25zdCBzdmdCdG5IZWlnaHQgPSAxODtcbiAgICBjb25zdCBzdmdFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gICAgbGlzdEl0ZW1FZGl0LmFwcGVuZENoaWxkKHN2Z0VkaXQpO1xuICAgIHN2Z0VkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDUxMiA1MTInKTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHN2Z0J0bldpZHRoKTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBzdmdCdG5IZWlnaHQpO1xuXG4gICAgY29uc3QgcGF0aEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdwYXRoJyk7XG4gICAgc3ZnRWRpdC5hcHBlbmRDaGlsZChwYXRoRWRpdClcbiAgICBwYXRoRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZCcsICdNNDcxLjYgMjEuN2MtMjEuOS0yMS45LTU3LjMtMjEuOS03OS4yIDBMMzYyLjMgNTEuN2w5Ny45IDk3LjkgMzAuMS0zMC4xYzIxLjktMjEuOSAyMS45LTU3LjMgMC03OS4yTDQ3MS42IDIxLjd6bS0yOTkuMiAyMjBjLTYuMSA2LjEtMTAuOCAxMy42LTEzLjUgMjEuOWwtMjkuNiA4OC44Yy0yLjkgOC42LS42IDE4LjEgNS44IDI0LjZzMTUuOSA4LjcgMjQuNiA1LjhsODguOC0yOS42YzguMi0yLjcgMTUuNy03LjQgMjEuOS0xMy41TDQzNy43IDE3Mi4zIDMzOS43IDc0LjMgMTcyLjQgMjQxLjd6TTk2IDY0QzQzIDY0IDAgMTA3IDAgMTYwVjQxNmMwIDUzIDQzIDk2IDk2IDk2SDM1MmM1MyAwIDk2LTQzIDk2LTk2VjMyMGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnY5NmMwIDE3LjctMTQuMyAzMi0zMiAzMkg5NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMTYwYzAtMTcuNyAxNC4zLTMyIDMyLTMyaDk2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDk2eicpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHN2Z0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3N2ZycpO1xuICAgIGxpc3RJdGVtRGVsZXRlLmFwcGVuZENoaWxkKHN2Z0RlbGV0ZSk7XG4gICAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd2aWV3Qm94JywgJzAgMCA0NDggNTEyJyk7XG4gICAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHN2Z0J0bldpZHRoKTtcbiAgICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHN2Z0J0bkhlaWdodCk7XG5cbiAgICBjb25zdCBwYXRoRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAncGF0aCcpO1xuICAgIHN2Z0RlbGV0ZS5hcHBlbmRDaGlsZChwYXRoRGVsZXRlKTtcbiAgICBwYXRoRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkJywgJ00xMzUuMiAxNy43TDEyOCAzMkgzMkMxNC4zIDMyIDAgNDYuMyAwIDY0UzE0LjMgOTYgMzIgOTZINDE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDMyMGwtNy4yLTE0LjNDMzA3LjQgNi44IDI5Ni4zIDAgMjg0LjIgMEgxNjMuOGMtMTIuMSAwLTIzLjIgNi44LTI4LjYgMTcuN3pNNDE2IDEyOEgzMkw1My4yIDQ2N2MxLjYgMjUuMyAyMi42IDQ1IDQ3LjkgNDVIMzQ2LjljMjUuMyAwIDQ2LjMtMTkuNyA0Ny45LTQ1TDQxNiAxMjh6Jyk7XG4gICAgXG4gICAgbGlzdEJ1dHRvbnMuYXBwZW5kKGxpc3RJdGVtRWRpdCwgbGlzdEl0ZW1EZWxldGUpO1xuICAgIGxpc3RJdGVtVG9kby5hcHBlbmRDaGlsZChsaXN0QnV0dG9ucyk7XG4gICAgbGlzdFRvZG9zLmFwcGVuZChsaXN0SXRlbVRvZG8pO1xuICB9XG59XG5cbi8vIE9uIFNjcmlwdCBMb2FkLCBsZXQncyBkbyBzb21lIGJhc2ljIHN0dWZmXG5jcmVhdGVET00oKTtcbmNyZWF0ZUZvcm0oKTtcbmNvbnN0IHByb2plY3RUb2RheSA9IFByb2plY3QoJ3RvZGF5Jyk7XG4iXSwibmFtZXMiOlsiRm9ybUNvbnRyb2xsZXIiLCJmb3JtRGF0YSIsIm5ld1RvZG8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwibm90ZXMiLCJ0aGlzIiwiVG9EbyIsInZhbHVlIiwicHJvamVjdFRvZGF5IiwiYWRkVG9kbyIsIkRvbVVwZGF0ZXIiLCJhZGROZXdUb2RvIiwidG9kbyIsImxpc3RUb2RvcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsaXN0SXRlbVRvZG8iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwibGlzdEJ1dHRvbnMiLCJjbGFzc0xpc3QiLCJhZGQiLCJsaXN0SXRlbUVkaXQiLCJ4bWxucyIsInN2Z0VkaXQiLCJjcmVhdGVFbGVtZW50TlMiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZU5TIiwicGF0aEVkaXQiLCJsaXN0SXRlbURlbGV0ZSIsInN2Z0RlbGV0ZSIsInBhdGhEZWxldGUiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2RGFzaGJvYXJkIiwiZGFzaGJvYXJkVG9kb3NMaXN0IiwiZm9ybSIsImluc2VydEJlZm9yZSIsImlkIiwiaW5wdXRzIiwiaSIsImxlbmd0aCIsImlucHV0TmFtZSIsImxhYmVsIiwic2V0QXR0cmlidXRlIiwiaW5wdXQiLCJzbGljZSIsInRvVXBwZXJDYXNlIiwidHlwZSIsIm1heExlbmd0aCIsInNlbGVjdCIsIm9wdGlvbkxvdyIsIm9wdGlvbk1lZGl1bSIsIm9wdGlvbkhpZ2giLCJ0ZXh0QXJlYSIsInBsYWNlaG9sZGVyIiwiYnRuU3VibWl0IiwiZWxlbWVudHMiLCJjcmVhdGVGb3JtIiwibmFtZSIsInRvZG9zIiwicHVzaCIsIlByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9