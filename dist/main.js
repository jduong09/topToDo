(()=>{const e=e=>{const o=function(e,t,n,o,d){return this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=d,{title:e,dueDate:n}}(e[0].value,e[1].value,e[2].value,e[3].value,e[4].value);n.addTodo(o),t.addNewTodo(o)},t={addNewTodo:e=>{const t=document.getElementById("content"),n=document.createElement("div");n.innerHTML=`${e.title}, ${e.dueDate}`,t.append(n)}};(()=>{const e=document.createElement("div");e.id="content";const t=document.createElement("button");t.innerHTML="+",t.addEventListener("click",(e=>{e.preventDefault()})),e.append(t),document.querySelector("body").appendChild(e)})(),(()=>{const t=document.getElementById("content"),n=document.createElement("form");n.id="form-create-todo";const o=["title","description","due-date","priority","notes"];for(let e=0;e<o.length;e++){const t=o[e],d=document.createElement("label");if(d.setAttribute("for",t),"title"===t||"description"===t){const e=document.createElement("input");e.id=t,e.setAttribute("name",t),e.type="text",n.append(d,e)}else if("due-date"===t){const e=document.createElement("input");e.id=t,e.setAttribute("name",t),e.type="date",n.append(d,e)}else if("priority"===t){const e=document.createElement("select");e.setAttribute("name",t);const o=document.createElement("option");o.setAttribute("value","low"),o.innerHTML="Low";const i=document.createElement("option");i.setAttribute("value","medium"),i.innerHTML="Medium";const c=document.createElement("option");c.setAttribute("value","high"),c.innerHTML="High",e.append(o,i,c),n.append(d,e)}else{const e=document.createElement("textarea");e.id=t,e.setAttribute("name",t),e.setAttribute("rows",5),e.setAttribute("cols",33),e.placeholder="Contact Justin at...",n.append(d,e)}}const d=document.createElement("button");d.id="button-submit",d.type="submit",d.innerHTML="Create Todo",d.addEventListener("click",(t=>{t.preventDefault(),e(n.elements)})),n.appendChild(d),t.append(n)})();const n=function(e){this.name=e;let t=[];return{name:e,addTodo:e=>{t.push(e)},todos:t}}("today")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNGLENBR0EsTUFBTUUsRUFBWTlCLFNBQVNHLGNBQWMsVUFDekMyQixFQUFVdkIsR0FBSyxnQkFDZnVCLEVBQVVQLEtBQU8sU0FDakJPLEVBQVUxQixVQUFZLGNBRXRCMEIsRUFBVXJCLGlCQUFpQixTQUFVQyxJQUNuQ0EsRUFBRUMsaUJBRUY1QixFQUEwQmdDLEVBQUtnQixTQUFTLElBRzFDaEIsRUFBS0YsWUFBWWlCLEdBRWpCeEIsRUFBUUQsT0FBT1UsRUFBSyxFQXlCdEJpQixHQUNBLE1BQU10QyxFQWxMTixTQUFpQnVDLEdBQ2YxQyxLQUFLMEMsS0FBT0EsRUFDWixJQUFJQyxFQUFRLEdBTVosTUFBTyxDQUFFRCxPQUFNdEMsUUFKRUcsSUFDZm9DLEVBQU1DLEtBQUtyQyxFQUFLLEVBR01vQyxRQUMxQixDQXlLcUJFLENBQVEsUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcHRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogQnVpbGQgZnJvbSB0aGUgaW5zaWRlIG91dCAqL1xuXG4vKiBUbyBETyBBcHAgKi9cblxuLyogXG4gIFRvIERvIE9iamVjdFxuICBDb25zdHJ1Y3RvclxuICB7XG4gICAgVGl0bGU6ICdIZWxsbydcbiAgICBEZXNjcmlwdGlvbjogJ0hlbGxvIGkgbmVlZCB0byBkbyB0aGlzJ1xuICAgIER1ZSBEYXRlOiBNTS9ERC9ZWVlZXG4gICAgcHJpb3JpdHk6IExvdy9NZWQvSGlnaFxuICAgIG5vdGVzOiAnZmprZGFmamthZDtsJ1xuICB9XG5cbiAgVG9EbyBDb250cm9sbGVyXG5cbiAgQ1JVRFxuICBDcmVhdGUgVG9kb1xuICBSZWFkIFRvZG9cbiAgVXBkYXRlIFRvZG9cbiAgRGVsZXRlIFRvZG9cbiovXG5cbmZ1bmN0aW9uIFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuXG4gIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlIH07XG59XG5cbmZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgYWRkVG9kbywgdG9kb3MgfTtcbn1cblxuLy8gRGFzaGJvYXJkXG5cbi8vIExpc3Qgb2YgUHJvamVjdHNcblxuLy8gTGlzdCBvZiBUb2RvcyBmb3IgdGhlIGRheT8gXG5cbi8vIEFsbCBUb2Rvc1xuXG4vLyBUb2RvcyBiYXNlZCBvbiBwcmlvcml0eT9cblxuLy8gQWJpbGl0eSB0byBjcmVhdGUvdXBkYXRlL2RlbGV0ZSB0b2RvLlxuXG4vLyBBYmlsaXR5IHRvIGNyZWF0ZS91cGRhdGUvZGVsZXRlIHByb2plY3RcblxuLy8gRmlyc3QgaW50ZXJmYWNlIGlzIFRvZGF5cyBUb2Rvc1xuXG4vKlxuY29uc3QgVG9Eb0NvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZm9ybURhdGEpID0+IHtcbiAgICBjb25zdCB0b2RvID0gRm9ybUNvbnRyb2xsZXIuY3JlYXRlVG9kbyhmb3JtRGF0YSk7XG5cbiAgICBwcm9qZWN0VG9kYXkuYWRkVG9kbyh0b2RvKTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRUb2RvID0gKGZvcm1EYXRhKSA9PiB7XG4gICAgRm9ybUNvbnRyb2xsZXIuZWRpdFRvZG8oZm9ybURhdGEpO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlVG9kbyB9OyBcbn1cblxuKi9cblxuY29uc3QgY3JlYXRlRE9NID0gKCkgPT4ge1xuICBjb25zdCBkaXZNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdk1haW4uaWQgPSAnY29udGVudCc7XG4gIGNvbnN0IGJ0bkNyZWF0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuQ3JlYXRlVG9kby5pbm5lckhUTUwgPSAnKyc7XG5cbiAgYnRuQ3JlYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBkaXZNYWluLmFwcGVuZChidG5DcmVhdGVUb2RvKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRpdk1haW4pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgJ05ldyBUb2RvJyBGb3JtIGFuZCBhcHBlbmQgdG8gRG9tLlxuY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGl2TWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uaWQgPSAnZm9ybS1jcmVhdGUtdG9kbyc7XG5cbiAgLy8gQ3JlYXRlIG5ldyB0b2RvIGZvcm1cbiAgLy8gaW5wdXRbdGV4dF0gVGl0bGVcbiAgLy8gaW5wdXRbdGV4dF0gRGVzY3JpcHRpb25cbiAgLy8gaW5wdXRbZGF0ZV0gRHVlIERhdGVcbiAgLy8gc2VsZWN0IFByaW9yaXR5XG4gIC8vIHRleHRBcmVhIE5vdGVzXG4gIGNvbnN0IGlucHV0cyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZHVlLWRhdGUnLCAncHJpb3JpdHknLCAnbm90ZXMnXTtcblxuICAvKlxuICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRUaXRsZS5pZCA9ICd0aXRsZSc7XG4gIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gIGlucHV0VGl0bGUudHlwZSA9ICd0ZXh0JztcblxuXG4gIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dERlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbiAgaW5wdXREZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xuXG4gIGNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RHVlRGF0ZS5pZCA9ICdkdWUtZGF0ZSc7XG4gIGlucHV0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlLWRhdGUnKTtcbiAgaW5wdXREdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICovXG5cbiBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbnB1dE5hbWUgPSBpbnB1dHNbaV07XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dE5hbWUpO1xuXG4gICAgaWYgKGlucHV0TmFtZSA9PT0gJ3RpdGxlJyB8fCBpbnB1dE5hbWUgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LmlkID0gaW5wdXROYW1lO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXROYW1lID09PSAnZHVlLWRhdGUnKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5pZCA9IGlucHV0TmFtZTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgICBpbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgZm9ybS5hcHBlbmQobGFiZWwsIGlucHV0KTtcbiAgICB9IGVsc2UgaWYgKGlucHV0TmFtZSA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uTG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gICAgICBvcHRpb25Mb3cuaW5uZXJIVE1MID0gJ0xvdyc7XG5cbiAgICAgIGNvbnN0IG9wdGlvbk1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uTWVkaXVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgICBvcHRpb25NZWRpdW0uaW5uZXJIVE1MID0gJ01lZGl1bSc7XG5cbiAgICAgIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbkhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgICBvcHRpb25IaWdoLmlubmVySFRNTCA9ICdIaWdoJztcblxuICAgICAgc2VsZWN0LmFwcGVuZChvcHRpb25Mb3csIG9wdGlvbk1lZGl1bSwgb3B0aW9uSGlnaCk7XG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgc2VsZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dEFyZWEgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHRleHRBcmVhLmlkID0gaW5wdXROYW1lO1xuICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsIDUpO1xuICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgMzMpO1xuICAgICAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnQ29udGFjdCBKdXN0aW4gYXQuLi4nO1xuXG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgdGV4dEFyZWEpO1xuICAgIH1cbiAgfVxuXG4gIC8qIFN1Ym1pdCBpbnB1dCAqL1xuICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuU3VibWl0LmlkID0gJ2J1dHRvbi1zdWJtaXQnO1xuICBidG5TdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICBidG5TdWJtaXQuaW5uZXJIVE1MID0gJ0NyZWF0ZSBUb2RvJztcblxuICBidG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBGb3JtQ29udHJvbGxlci5jcmVhdGVUb2RvKGZvcm0uZWxlbWVudHMpO1xuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG5cbiAgZGl2TWFpbi5hcHBlbmQoZm9ybSk7XG59XG4vLyByZXR1cm5zIGEgNiBlbGVtZW50IEhUTUwgQ29sbGVjdGlvblxuLy8gV2UgaXRlcmF0ZSB0byA1LCB3aGlsZSBza2lwcGluZyB0aGUgbGFzdCBvbmUgYmVjYXVzZSB0aGF0IGlzIHRoZSBzdWJtaXQgYnV0dG9uLlxuY29uc3QgRm9ybUNvbnRyb2xsZXIgPSB7XG4gIGNyZWF0ZVRvZG86IChmb3JtRGF0YSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBUb0RvKGZvcm1EYXRhWzBdLnZhbHVlLCBmb3JtRGF0YVsxXS52YWx1ZSwgZm9ybURhdGFbMl0udmFsdWUsIGZvcm1EYXRhWzNdLnZhbHVlLCBmb3JtRGF0YVs0XS52YWx1ZSk7XG4gICAgcHJvamVjdFRvZGF5LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgRG9tVXBkYXRlci5hZGROZXdUb2RvKG5ld1RvZG8pO1xuICB9XG59O1xuXG5jb25zdCBEb21VcGRhdGVyID0ge1xuICBhZGROZXdUb2RvOiAodG9kbykgPT4ge1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IGRpdlRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZUb2RvLmlubmVySFRNTCA9IGAke3RvZG8udGl0bGV9LCAke3RvZG8uZHVlRGF0ZX1gO1xuXG4gICAgZGl2Q29udGVudC5hcHBlbmQoZGl2VG9kbyk7XG4gIH1cbn1cblxuLy8gT24gU2NyaXB0IExvYWQsIGxldCdzIGRvIHNvbWUgYmFzaWMgc3R1ZmZcbmNyZWF0ZURPTSgpO1xuY3JlYXRlRm9ybSgpO1xuY29uc3QgcHJvamVjdFRvZGF5ID0gUHJvamVjdCgndG9kYXknKTtcbiJdLCJuYW1lcyI6WyJGb3JtQ29udHJvbGxlciIsImZvcm1EYXRhIiwibmV3VG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJub3RlcyIsInRoaXMiLCJUb0RvIiwidmFsdWUiLCJwcm9qZWN0VG9kYXkiLCJhZGRUb2RvIiwiRG9tVXBkYXRlciIsImFkZE5ld1RvZG8iLCJ0b2RvIiwiZGl2Q29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXZUb2RvIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZCIsImRpdk1haW4iLCJpZCIsImJ0bkNyZWF0ZVRvZG8iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiY3JlYXRlRE9NIiwiZm9ybSIsImlucHV0cyIsImkiLCJsZW5ndGgiLCJpbnB1dE5hbWUiLCJsYWJlbCIsInNldEF0dHJpYnV0ZSIsImlucHV0IiwidHlwZSIsInNlbGVjdCIsIm9wdGlvbkxvdyIsIm9wdGlvbk1lZGl1bSIsIm9wdGlvbkhpZ2giLCJ0ZXh0QXJlYSIsInBsYWNlaG9sZGVyIiwiYnRuU3VibWl0IiwiZWxlbWVudHMiLCJjcmVhdGVGb3JtIiwibmFtZSIsInRvZG9zIiwicHVzaCIsIlByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9