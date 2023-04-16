(()=>{const e=e=>{const o=function(e,t,n,o,i){return this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=i,{title:e,dueDate:n}}(e[0].value,e[1].value,e[2].value,e[3].value,e[4].value);n.addTodo(o),t.addNewTodo(o)},t={addNewTodo:e=>{const t=document.getElementById("list-todos"),n=document.createElement("li");n.innerHTML=`${e.title}, ${e.dueDate}`,t.append(n)}};document.getElementById("btn-create-todo").addEventListener("click",(e=>{e.preventDefault()})),(()=>{const t=document.getElementById("dashboard"),n=document.getElementById("dashboard-todos-list"),o=document.createElement("form");t.insertBefore(o,n),o.id="form-create-todo";const i=["title","description","due-date","priority","notes"];for(let e=0;e<i.length;e++){const t=i[e],n=document.createElement("label");if(n.setAttribute("for",t),"title"===t||"description"===t){const e=document.createElement("input");n.innerHTML=`${t.slice(0,1).toUpperCase()+t.slice(1)}:`,e.id=t,e.setAttribute("name",t),e.type="text",o.append(n,e)}else if("due-date"===t){n.innerHTML="Due Date:";const e=document.createElement("input");e.id=t,e.setAttribute("name",t),e.type="date",o.append(n,e)}else if("priority"===t){n.innerHTML="Priority:";const e=document.createElement("select");e.setAttribute("name",t);const i=document.createElement("option");i.setAttribute("value","low"),i.innerHTML="Low";const d=document.createElement("option");d.setAttribute("value","medium"),d.innerHTML="Medium";const r=document.createElement("option");r.setAttribute("value","high"),r.innerHTML="High",e.append(i,d,r),o.append(n,e)}else{n.innerHTML="Notes:";const e=document.createElement("textarea");e.id=t,e.setAttribute("name",t),e.setAttribute("rows",5),e.setAttribute("cols",33),e.placeholder="Contact Justin at...",o.append(n,e)}}const d=document.createElement("button");d.id="button-submit",d.type="submit",d.innerHTML="Create Todo",d.addEventListener("click",(t=>{t.preventDefault(),e(o.elements)})),o.appendChild(d)})();const n=function(e){this.name=e;let t=[];return{name:e,addTodo:e=>{t.push(e)},todos:t}}("today")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9hLEVBQU9VLEVBQ3JCLENBQ0YsQ0FHQSxNQUFNRSxFQUFZOUIsU0FBU0csY0FBYyxVQUN6QzJCLEVBQVVqQixHQUFLLGdCQUNmaUIsRUFBVVAsS0FBTyxTQUNqQk8sRUFBVTFCLFVBQVksY0FFdEIwQixFQUFVeEIsaUJBQWlCLFNBQVVDLElBQ25DQSxFQUFFQyxpQkFFRnpCLEVBQTBCNEIsRUFBS29CLFNBQVMsSUFHMUNwQixFQUFLcUIsWUFBWUYsRUFBVSxFQTBCN0JHLEdBQ0EsTUFBTXZDLEVBeElOLFNBQWlCd0MsR0FDZjNDLEtBQUsyQyxLQUFPQSxFQUNaLElBQUlDLEVBQVEsR0FNWixNQUFPLENBQUVELE9BQU12QyxRQUpFRyxJQUNmcUMsRUFBTUMsS0FBS3RDLEVBQUssRUFHTXFDLFFBQzFCLENBK0hxQkUsQ0FBUSxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdWlsZCBmcm9tIHRoZSBpbnNpZGUgb3V0ICovXG5cbi8qIFRvIERPIEFwcCAqL1xuXG4vKiBcbiAgVG8gRG8gT2JqZWN0XG4gIENvbnN0cnVjdG9yXG4gIHtcbiAgICBUaXRsZTogJ0hlbGxvJ1xuICAgIERlc2NyaXB0aW9uOiAnSGVsbG8gaSBuZWVkIHRvIGRvIHRoaXMnXG4gICAgRHVlIERhdGU6IE1NL0REL1lZWVlcbiAgICBwcmlvcml0eTogTG93L01lZC9IaWdoXG4gICAgbm90ZXM6ICdmamtkYWZqa2FkO2wnXG4gIH1cblxuICBUb0RvIENvbnRyb2xsZXJcblxuICBDUlVEXG4gIENyZWF0ZSBUb2RvXG4gIFJlYWQgVG9kb1xuICBVcGRhdGUgVG9kb1xuICBEZWxldGUgVG9kb1xuKi9cblxuZnVuY3Rpb24gVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG5cbiAgcmV0dXJuIHsgdGl0bGUsIGR1ZURhdGUgfTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICByZXR1cm4geyBuYW1lLCBhZGRUb2RvLCB0b2RvcyB9O1xufVxuXG4vLyBEYXNoYm9hcmRcblxuLy8gTGlzdCBvZiBQcm9qZWN0c1xuXG4vLyBMaXN0IG9mIFRvZG9zIGZvciB0aGUgZGF5PyBcblxuLy8gQWxsIFRvZG9zXG5cbi8vIFRvZG9zIGJhc2VkIG9uIHByaW9yaXR5P1xuXG4vLyBBYmlsaXR5IHRvIGNyZWF0ZS91cGRhdGUvZGVsZXRlIHRvZG8uXG5cbi8vIEFiaWxpdHkgdG8gY3JlYXRlL3VwZGF0ZS9kZWxldGUgcHJvamVjdFxuXG4vLyBGaXJzdCBpbnRlcmZhY2UgaXMgVG9kYXlzIFRvZG9zXG5cbmNvbnN0IGNyZWF0ZURPTSA9ICgpID0+IHtcbiAgY29uc3QgYnRuQ3JlYXRlVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY3JlYXRlLXRvZG8nKTtcblxuICBidG5DcmVhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgJ05ldyBUb2RvJyBGb3JtIGFuZCBhcHBlbmQgdG8gRG9tLlxuY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGl2RGFzaGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rhc2hib2FyZCcpO1xuICBjb25zdCBkYXNoYm9hcmRUb2Rvc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFzaGJvYXJkLXRvZG9zLWxpc3QnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgXG4gIGRpdkRhc2hib2FyZC5pbnNlcnRCZWZvcmUoZm9ybSwgZGFzaGJvYXJkVG9kb3NMaXN0KTtcbiAgZm9ybS5pZCA9ICdmb3JtLWNyZWF0ZS10b2RvJztcblxuICBjb25zdCBpbnB1dHMgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2R1ZS1kYXRlJywgJ3ByaW9yaXR5JywgJ25vdGVzJ107XG4gXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW5wdXROYW1lID0gaW5wdXRzW2ldO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXROYW1lKTtcblxuICAgIGlmIChpbnB1dE5hbWUgPT09ICd0aXRsZScgfHwgaW5wdXROYW1lID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSBgJHtpbnB1dE5hbWUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIGlucHV0TmFtZS5zbGljZSgxKX06YDtcbiAgICAgIGlucHV0LmlkID0gaW5wdXROYW1lO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXROYW1lID09PSAnZHVlLWRhdGUnKSB7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSAnRHVlIERhdGU6JztcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LmlkID0gaW5wdXROYW1lO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIGlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXROYW1lID09PSAncHJpb3JpdHknKSB7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSAnUHJpb3JpdHk6JztcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbkxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgb3B0aW9uTG93LmlubmVySFRNTCA9ICdMb3cnO1xuXG4gICAgICBjb25zdCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbk1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgb3B0aW9uTWVkaXVtLmlubmVySFRNTCA9ICdNZWRpdW0nO1xuXG4gICAgICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb25IaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgb3B0aW9uSGlnaC5pbm5lckhUTUwgPSAnSGlnaCc7XG5cbiAgICAgIHNlbGVjdC5hcHBlbmQob3B0aW9uTG93LCBvcHRpb25NZWRpdW0sIG9wdGlvbkhpZ2gpO1xuICAgICAgZm9ybS5hcHBlbmQobGFiZWwsIHNlbGVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdOb3RlczonO1xuICAgICAgY29uc3QgdGV4dEFyZWEgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHRleHRBcmVhLmlkID0gaW5wdXROYW1lO1xuICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsIDUpO1xuICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgMzMpO1xuICAgICAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnQ29udGFjdCBKdXN0aW4gYXQuLi4nO1xuXG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgdGV4dEFyZWEpO1xuICAgIH1cbiAgfVxuXG4gIC8qIFN1Ym1pdCBpbnB1dCAqL1xuICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuU3VibWl0LmlkID0gJ2J1dHRvbi1zdWJtaXQnO1xuICBidG5TdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICBidG5TdWJtaXQuaW5uZXJIVE1MID0gJ0NyZWF0ZSBUb2RvJztcblxuICBidG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBGb3JtQ29udHJvbGxlci5jcmVhdGVUb2RvKGZvcm0uZWxlbWVudHMpO1xuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG59XG5cbi8vIGZvcm1EYXRhIHJldHVybnMgYSA2IGVsZW1lbnQgSFRNTCBDb2xsZWN0aW9uXG4vLyBXZSBpdGVyYXRlIHRvIDUsIHdoaWxlIHNraXBwaW5nIHRoZSBsYXN0IG9uZSBiZWNhdXNlIHRoYXQgaXMgdGhlIHN1Ym1pdCBidXR0b24uXG5jb25zdCBGb3JtQ29udHJvbGxlciA9IHtcbiAgY3JlYXRlVG9kbzogKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvRG8oZm9ybURhdGFbMF0udmFsdWUsIGZvcm1EYXRhWzFdLnZhbHVlLCBmb3JtRGF0YVsyXS52YWx1ZSwgZm9ybURhdGFbM10udmFsdWUsIGZvcm1EYXRhWzRdLnZhbHVlKTtcbiAgICBwcm9qZWN0VG9kYXkuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICBEb21VcGRhdGVyLmFkZE5ld1RvZG8obmV3VG9kbyk7XG4gIH1cbn07XG5cbmNvbnN0IERvbVVwZGF0ZXIgPSB7XG4gIGFkZE5ld1RvZG86ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdG9kb3MnKTtcbiAgICBcbiAgICBjb25zdCBsaXN0SXRlbVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtVG9kby5pbm5lckhUTUwgPSBgJHt0b2RvLnRpdGxlfSwgJHt0b2RvLmR1ZURhdGV9YDtcblxuICAgIGxpc3RUb2Rvcy5hcHBlbmQobGlzdEl0ZW1Ub2RvKTtcbiAgfVxufVxuXG4vLyBPbiBTY3JpcHQgTG9hZCwgbGV0J3MgZG8gc29tZSBiYXNpYyBzdHVmZlxuY3JlYXRlRE9NKCk7XG5jcmVhdGVGb3JtKCk7XG5jb25zdCBwcm9qZWN0VG9kYXkgPSBQcm9qZWN0KCd0b2RheScpO1xuIl0sIm5hbWVzIjpbIkZvcm1Db250cm9sbGVyIiwiZm9ybURhdGEiLCJuZXdUb2RvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsIm5vdGVzIiwidGhpcyIsIlRvRG8iLCJ2YWx1ZSIsInByb2plY3RUb2RheSIsImFkZFRvZG8iLCJEb21VcGRhdGVyIiwiYWRkTmV3VG9kbyIsInRvZG8iLCJsaXN0VG9kb3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGlzdEl0ZW1Ub2RvIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXZEYXNoYm9hcmQiLCJkYXNoYm9hcmRUb2Rvc0xpc3QiLCJmb3JtIiwiaW5zZXJ0QmVmb3JlIiwiaWQiLCJpbnB1dHMiLCJpIiwibGVuZ3RoIiwiaW5wdXROYW1lIiwibGFiZWwiLCJzZXRBdHRyaWJ1dGUiLCJpbnB1dCIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJ0eXBlIiwic2VsZWN0Iiwib3B0aW9uTG93Iiwib3B0aW9uTWVkaXVtIiwib3B0aW9uSGlnaCIsInRleHRBcmVhIiwicGxhY2Vob2xkZXIiLCJidG5TdWJtaXQiLCJlbGVtZW50cyIsImFwcGVuZENoaWxkIiwiY3JlYXRlRm9ybSIsIm5hbWUiLCJ0b2RvcyIsInB1c2giLCJQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==