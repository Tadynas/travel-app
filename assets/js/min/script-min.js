"use strict";var body=document.querySelector("body"),burgerBtn=document.querySelector(".js-burger-menu"),nav=document.querySelector(".js-nav");burgerBtn.addEventListener("click",function(){body.classList.toggle("disable"),nav.classList.toggle("active"),burgerBtn.classList.toggle("active")});var moreDetailsBtn=document.querySelector(".js-more-details"),backBtn=document.querySelector(".js-back"),detailTitle=document.querySelector(".js-detail-title"),tooltip=document.querySelector(".js-tooltip"),detailsPane=new CupertinoPane("#details",{parentElement:"main",initialBreak:"top",breaks:{top:{enabled:!0,height:window.innerHeight-45},middle:{enabled:!1},bottom:{enabled:!0,height:0}},pushElement:".intro__card",pushYOffset:50,backdrop:!0,buttonClose:!1,bottomClose:!0,onWillDismiss:function(){detailTitle.classList.remove("active"),backBtn.classList.remove("active")},onDrag:function(){tooltip.classList.contains("active")&&tooltip.classList.remove("active")}});moreDetailsBtn.addEventListener("click",function(){detailsPane.present({animate:!0}),detailTitle.classList.add("active"),backBtn.classList.add("active")}),backBtn.addEventListener("click",function(){detailsPane.hide(),detailTitle.classList.remove("active"),backBtn.classList.remove("active")});var details=document.querySelector("#details"),availabilityBar=document.querySelector(".js-availability-bar");details.addEventListener("scroll",function(){details.scrollHeight-window.innerHeight+45-details.scrollTop<200?availabilityBar.classList.contains("hidden")||availabilityBar.classList.add("hidden"):availabilityBar.classList.contains("hidden")&&availabilityBar.classList.remove("hidden")});var _tooltip=document.querySelector(".js-tooltip");window.addEventListener("click",function(t){t.path.includes(_tooltip)&&!_tooltip.classList.contains("active")?_tooltip.classList.add("active"):_tooltip.classList.contains("active")&&_tooltip.classList.remove("active")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnVyZ2VyQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm5hdiIsIm1vcmVEZXRhaWxzQnRuIiwiYmFja0J0biIsInRvb2x0aXAiLCJwYXJlbnRFbGVtZW50IiwiYnJlYWtzIiwiQ3VwZXJ0aW5vUGFuZSIsInRvcCIsImVuYWJsZWQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm1pZGRsZSIsImJvdHRvbSIsImJ1dHRvbkNsb3NlIiwiYm90dG9tQ2xvc2UiLCJwdXNoRWxlbWVudCIsInB1c2hZT2Zmc2V0IiwicmVtb3ZlIiwiYmFja2Ryb3AiLCJvbldpbGxEaXNtaXNzIiwiY29udGFpbnMiLCJkZXRhaWxUaXRsZSIsImRldGFpbHNQYW5lIiwicHJlc2VudCIsImFuaW1hdGUiLCJhZGQiLCJkZXRhaWxzIiwiYXZhaWxhYmlsaXR5QmFyIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZSJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBTUEsS0FBT0MsU0FBU0MsY0FBYyxRQUR0Q0MsVUFBQUYsU0FBQUMsY0FBQSxtQkFDUUYsSUFBT0MsU0FBU0MsY0FBYyxXQUVwQ0MsVUFBWUYsaUJBQVNDLFFBQWMsV0FFbkNDLEtBQUFBLFVBQVVDLE9BQUFBLFdBQ1JKLElBQUlLLFVBQUpDLE9BQUEsVUFDQUMsVUFBSUYsVUFBSkMsT0FBcUIsWUFNdkIsSUFBTUUsZUFBaUJQLFNBQVNDLGNBQWMsb0JBQ3hDTyxRQUFVUixTQUFTQyxjQUFjLFlBSWpDUSxZQUFVVCxTQUFTQyxjQUFjLG9CQUduQ1MsUUFBYVYsU0FEaUNDLGNBQUEsZUFHOUNVLFlBQVEsSUFBQUMsY0FBQSxXQUFBLENBQ05DLGNBQUssT0FBRUMsYUFBUyxNQUFNQyxPQUFNLENBRHRCRixJQUFBLENBQUFDLFNBQUEsRUFBQUMsT0FBQUMsT0FBQUMsWUFBQSxJQUVOQyxPQUFRLENBQUFKLFNBQUEsR0FBRUEsT0FBTyxDQUFFQSxTQUFBLEVBQUFDLE9BQUEsSUFDbkJJLFlBQVEsZUFBRUwsWUFBUyxHQUFNQyxVQUFRLEVBQXpCSyxhQUFBLEVBTm9DQyxhQUFBLEVBUTlDQyxjQUFhLFdBQ2JDLFlBVDhDbkIsVUFBQW9CLE9BQUEsVUFVOUNDLFFBQVVyQixVQVZvQ29CLE9BQUEsV0FZOUNILE9BQUFBLFdBQ0FLLFFBQWV0QixVQUFBdUIsU0FBQSxXQUNiQyxRQUFZeEIsVUFBVW9CLE9BQU8sYUFNNUJqQixlQUFBSixpQkFBQSxRQUFBLFdBQ0YwQixZQUFBQyxRQUFBLENBQUFDLFNBQUEsSUFyQkxILFlBQUF4QixVQUFBNEIsSUFBQSxVQXlCQXpCLFFBQUFBLFVBQWVKLElBQUFBLFlBQ09LLFFBQXBCTCxpQkFBQSxRQUFBLFdBQ0F5QixZQUFZeEIsT0FDWkksWUFBUUosVUFBY29CLE9BQUEsVUFIeEJoQixRQUFBSixVQUFBb0IsT0FBQSxZQVVDLElBSkRTLFFBQUFqQyxTQUFBQyxjQUFBLFlBS0RpQyxnQkFBQWxDLFNBQUFDLGNBQUEsd0JBR0NnQyxRQUFNQSxpQkFBbUJoQyxTQUFBQSxXQUNuQmlDLFFBQUFBLGFBQTBCbEIsT0FBQ2YsWUFBYyxHQUFBZ0MsUUFBQUUsVUFBL0MsSUFFUWhDLGdCQUFSQyxVQUFBdUIsU0FBbUMsV0FDNUJNLGdCQUFRRyxVQUFlcEIsSUFBT0MsVUFFL0JpQixnQkFBZ0I5QixVQUFjdUIsU0FBOUIsV0FDRE8sZ0JBQUE5QixVQUFBb0IsT0FBQSxZQU9QLElBQUFmLFNBQUFULFNBQUFDLGNBQUEsZUFHRWUsT0FBT2IsaUJBQWlCLFFBQVMsU0FBQ2tDLEdBQWxDckIsRUFBT2IsS0FBQUEsU0FBQUEsWUFBMEJNLFNBQUFMLFVBQU91QixTQUFBLFVBQ3RDbEIsU0FBR0wsVUFBZ0JLLElBQUFBLFVBQ1ZBLFNBQUNMLFVBQWN1QixTQUF0QixXQURGbEIsU0FFT0wsVUFBV0EsT0FBQUEiLCJmaWxlIjoic2NyaXB0LW1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIntcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ1cmdlci1tZW51JylcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbmF2JylcclxuXHJcbiAgYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlJylcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgfSlcclxufVxyXG5cclxue1xyXG4gIGNvbnN0IG1vcmVEZXRhaWxzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1vcmUtZGV0YWlscycpXHJcbiAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1iYWNrJylcclxuXHJcbiAgY29uc3QgZGV0YWlsVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGV0YWlsLXRpdGxlJylcclxuXHJcbiAgY29uc3QgdG9vbHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b29sdGlwJylcclxuICBcclxuICBjb25zdCBkZXRhaWxzUGFuZSA9IG5ldyBDdXBlcnRpbm9QYW5lKCcjZGV0YWlscycsIHsgXHJcbiAgICAgIHBhcmVudEVsZW1lbnQ6ICdtYWluJyxcclxuICAgICAgaW5pdGlhbEJyZWFrOiAndG9wJyxcclxuICAgICAgYnJlYWtzOiB7IFxyXG4gICAgICAgIHRvcDogeyBlbmFibGVkOiB0cnVlLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodC00NX0sXHJcbiAgICAgICAgbWlkZGxlOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgYm90dG9tOiB7IGVuYWJsZWQ6IHRydWUsIGhlaWdodDogMCB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHB1c2hFbGVtZW50OiAnLmludHJvX19jYXJkJyxcclxuICAgICAgcHVzaFlPZmZzZXQ6IDUwLFxyXG4gICAgICBiYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgYnV0dG9uQ2xvc2U6IGZhbHNlLFxyXG4gICAgICBib3R0b21DbG9zZTogdHJ1ZSxcclxuICAgICAgb25XaWxsRGlzbWlzczogKCkgPT4ge1xyXG4gICAgICAgIGRldGFpbFRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgYmFja0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICB9LFxyXG4gICAgICBvbkRyYWc6ICgpID0+IHtcclxuICAgICAgICBpZih0b29sdGlwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgIHRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApXHJcblxyXG4gIG1vcmVEZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGV0YWlsc1BhbmUucHJlc2VudCh7YW5pbWF0ZTogdHJ1ZX0pXHJcbiAgICBkZXRhaWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgYmFja0J0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIH0pXHJcblxyXG4gIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkZXRhaWxzUGFuZS5oaWRlKClcclxuICAgIGRldGFpbFRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBiYWNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgfSlcclxufVxyXG5cclxue1xyXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpIFxyXG4gIGNvbnN0IGF2YWlsYWJpbGl0eUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1hdmFpbGFiaWxpdHktYmFyJylcclxuXHJcbiAgZGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBpZigoKGRldGFpbHMuc2Nyb2xsSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ICsgNDUpIC0gZGV0YWlscy5zY3JvbGxUb3ApIDwgMjAwKSB7XHJcbiAgICAgIGlmKCFhdmFpbGFiaWxpdHlCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xyXG4gICAgICAgIGF2YWlsYWJpbGl0eUJhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYoYXZhaWxhYmlsaXR5QmFyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgYXZhaWxhYmlsaXR5QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxue1xyXG4gIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9vbHRpcCcpXHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZihlLnBhdGguaW5jbHVkZXModG9vbHRpcCkgJiYgIXRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9IGVsc2UgaWYodG9vbHRpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgIHRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4iXX0=
