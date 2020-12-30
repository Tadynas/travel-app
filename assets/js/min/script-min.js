"use strict";var body=document.querySelector("body"),burgerBtn=document.querySelector(".js-burger-menu"),nav=document.querySelector(".js-nav");burgerBtn.addEventListener("click",function(){body.classList.toggle("disable"),nav.classList.toggle("active"),burgerBtn.classList.toggle("active")});var moreDetailsBtn=document.querySelector(".js-more-details"),backBtn=document.querySelector(".js-back"),detailTitle=document.querySelector(".js-detail-title"),tooltip=document.querySelector(".js-tooltip"),detailsPane=new CupertinoPane("#details",{parentElement:"main",initialBreak:"top",breaks:{top:{enabled:!0,height:window.innerHeight-45},middle:{enabled:!1},bottom:{enabled:!0,height:0}},pushElement:".intro__card",pushYOffset:50,backdrop:!0,buttonClose:!1,bottomClose:!0,onWillDismiss:function(){detailTitle.classList.remove("active"),backBtn.classList.remove("active")},onDrag:function(){tooltip.classList.contains("active")&&tooltip.classList.remove("active")}});moreDetailsBtn.addEventListener("click",function(){detailsPane.present({animate:!0}),detailTitle.classList.add("active"),backBtn.classList.add("active")}),backBtn.addEventListener("click",function(){detailsPane.hide(),detailTitle.classList.remove("active"),backBtn.classList.remove("active")});var details=document.querySelector("#details"),availabilityBar=document.querySelector(".js-availability-bar");details.addEventListener("scroll",function(){details.scrollHeight-window.innerHeight+45-details.scrollTop<200?availabilityBar.classList.contains("hidden")||availabilityBar.classList.add("hidden"):availabilityBar.classList.contains("hidden")&&availabilityBar.classList.remove("hidden")});var _tooltip=document.querySelector(".js-tooltip");window.addEventListener("click",function(t){t.path.includes(_tooltip)&&!_tooltip.classList.contains("active")?_tooltip.classList.add("active"):_tooltip.classList.contains("active")&&_tooltip.classList.remove("active")});var intro=document.querySelector(".js-intro"),pane=document.querySelector(".pane");window.addEventListener("load",function(){var t=.01*window.innerHeight;intro.style.height="".concat(100*t,"px"),pane.style.height="".concat(100*t,"px")}),window.addEventListener("resize",function(){var t=.01*window.innerHeight;intro.style.height="".concat(100*t,"px"),pane.style.height="".concat(100*t,"px")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnVyZ2VyQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm5hdiIsIm1vcmVEZXRhaWxzQnRuIiwiYmFja0J0biIsInRvb2x0aXAiLCJwYXJlbnRFbGVtZW50IiwiYnJlYWtzIiwiQ3VwZXJ0aW5vUGFuZSIsInRvcCIsImVuYWJsZWQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm1pZGRsZSIsImJvdHRvbSIsImJ1dHRvbkNsb3NlIiwiYm90dG9tQ2xvc2UiLCJwdXNoRWxlbWVudCIsInB1c2hZT2Zmc2V0IiwicmVtb3ZlIiwiYmFja2Ryb3AiLCJvbldpbGxEaXNtaXNzIiwiY29udGFpbnMiLCJkZXRhaWxUaXRsZSIsImRldGFpbHNQYW5lIiwicHJlc2VudCIsImFuaW1hdGUiLCJhZGQiLCJkZXRhaWxzIiwiYXZhaWxhYmlsaXR5QmFyIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZSIsImludHJvIiwicGFuZSIsInZoIiwic3R5bGUiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJhQUNFLElBQU1BLEtBQU9DLFNBQVNDLGNBQWMsUUFEdENDLFVBQUFGLFNBQUFDLGNBQUEsbUJBQ1FGLElBQU9DLFNBQVNDLGNBQWMsV0FFcENDLFVBQVlGLGlCQUFTQyxRQUFjLFdBRW5DQyxLQUFBQSxVQUFVQyxPQUFBQSxXQUNSSixJQUFJSyxVQUFKQyxPQUFBLFVBQ0FDLFVBQUlGLFVBQUpDLE9BQXFCLFlBTXZCLElBQU1FLGVBQWlCUCxTQUFTQyxjQUFjLG9CQUN4Q08sUUFBVVIsU0FBU0MsY0FBYyxZQUlqQ1EsWUFBVVQsU0FBU0MsY0FBYyxvQkFHbkNTLFFBQWFWLFNBRGlDQyxjQUFBLGVBRzlDVSxZQUFRLElBQUFDLGNBQUEsV0FBQSxDQUNOQyxjQUFLLE9BQUVDLGFBQVMsTUFBTUMsT0FBTSxDQUR0QkYsSUFBQSxDQUFBQyxTQUFBLEVBQUFDLE9BQUFDLE9BQUFDLFlBQUEsSUFFTkMsT0FBUSxDQUFBSixTQUFBLEdBQUVBLE9BQU8sQ0FBRUEsU0FBQSxFQUFBQyxPQUFBLElBQ25CSSxZQUFRLGVBQUVMLFlBQVMsR0FBTUMsVUFBUSxFQUF6QkssYUFBQSxFQU5vQ0MsYUFBQSxFQVE5Q0MsY0FBYSxXQUNiQyxZQVQ4Q25CLFVBQUFvQixPQUFBLFVBVTlDQyxRQUFVckIsVUFWb0NvQixPQUFBLFdBWTlDSCxPQUFBQSxXQUNBSyxRQUFldEIsVUFBQXVCLFNBQUEsV0FDYkMsUUFBWXhCLFVBQVVvQixPQUFPLGFBTTVCakIsZUFBQUosaUJBQUEsUUFBQSxXQUNGMEIsWUFBQUMsUUFBQSxDQUFBQyxTQUFBLElBckJMSCxZQUFBeEIsVUFBQTRCLElBQUEsVUF5QkF6QixRQUFBQSxVQUFlSixJQUFBQSxZQUNPSyxRQUFwQkwsaUJBQUEsUUFBQSxXQUNBeUIsWUFBWXhCLE9BQ1pJLFlBQVFKLFVBQWNvQixPQUFBLFVBSHhCaEIsUUFBQUosVUFBQW9CLE9BQUEsWUFVQyxJQUpEUyxRQUFBakMsU0FBQUMsY0FBQSxZQUtEaUMsZ0JBQUFsQyxTQUFBQyxjQUFBLHdCQUdDZ0MsUUFBTUEsaUJBQW1CaEMsU0FBQUEsV0FDbkJpQyxRQUFBQSxhQUEwQmxCLE9BQUNmLFlBQWMsR0FBQWdDLFFBQUFFLFVBQS9DLElBRVFoQyxnQkFBUkMsVUFBQXVCLFNBQW1DLFdBQzVCTSxnQkFBUUcsVUFBZXBCLElBQU9DLFVBRS9CaUIsZ0JBQWdCOUIsVUFBY3VCLFNBQTlCLFdBQ0RPLGdCQUFBOUIsVUFBQW9CLE9BQUEsWUFPUCxJQUFBZixTQUFBVCxTQUFBQyxjQUFBLGVBR0VlLE9BQU9iLGlCQUFpQixRQUFTLFNBQUNrQyxHQUFsQ3JCLEVBQU9iLEtBQUFBLFNBQUFBLFlBQTBCTSxTQUFBTCxVQUFPdUIsU0FBQSxVQUN0Q2xCLFNBQUdMLFVBQWdCSyxJQUFBQSxVQUNWQSxTQUFDTCxVQUFjdUIsU0FBdEIsV0FERmxCLFNBRU9MLFVBQVdBLE9BQUFBLFlBT3BCLElBQU1rQyxNQUFRdEMsU0FBU0MsY0FBYyxhQUMvQnNDLEtBQU92QyxTQUFTQyxjQUFjLFNBR2xDZSxPQUFNd0IsaUJBQVl2QixPQUFjLFdBQ2hDcUIsSUFBTUcsRUFBa0JELElBQXhCeEIsT0FBQUMsWUFDQXNCLE1BQUtFLE1BQU0xQixPQUFYd0IsR0FBQUEsT0FBQSxJQUFBQyxFQUFBRCxNQUhGQSxLQUFBRSxNQUFBMUIsT0FBQSxHQUFBMkIsT0FBQSxJQUFBRixFQUFBLFFBUUVGLE9BQUtuQyxpQkFBTCxTQUF3QnFDLFdBQ3hCRCxJQUFLRSxFQUFvQixJQUFkMUIsT0FBWEUsWUFIRnFCLE1BQUFHLE1BQUExQixPQUFBLEdBQUEyQixPQUFBLElBQUFGLEVBQUEsTUFLREQsS0FBQUUsTUFBQTFCLE9BQUEsR0FBQTJCLE9BQUEsSUFBQUYsRUFBQSIsImZpbGUiOiJzY3JpcHQtbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsie1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnVyZ2VyLW1lbnUnKVxyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXYnKVxyXG5cclxuICBidXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGUnKVxyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICB9KVxyXG59XHJcblxyXG57XHJcbiAgY29uc3QgbW9yZURldGFpbHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbW9yZS1kZXRhaWxzJylcclxuICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJhY2snKVxyXG5cclxuICBjb25zdCBkZXRhaWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kZXRhaWwtdGl0bGUnKVxyXG5cclxuICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRvb2x0aXAnKVxyXG4gIFxyXG4gIGNvbnN0IGRldGFpbHNQYW5lID0gbmV3IEN1cGVydGlub1BhbmUoJyNkZXRhaWxzJywgeyBcclxuICAgICAgcGFyZW50RWxlbWVudDogJ21haW4nLFxyXG4gICAgICBpbml0aWFsQnJlYWs6ICd0b3AnLFxyXG4gICAgICBicmVha3M6IHsgXHJcbiAgICAgICAgdG9wOiB7IGVuYWJsZWQ6IHRydWUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LTQ1fSxcclxuICAgICAgICBtaWRkbGU6IHsgZW5hYmxlZDogZmFsc2UgfSxcclxuICAgICAgICBib3R0b206IHsgZW5hYmxlZDogdHJ1ZSwgaGVpZ2h0OiAwIH1cclxuICAgICAgfSxcclxuICAgICAgcHVzaEVsZW1lbnQ6ICcuaW50cm9fX2NhcmQnLFxyXG4gICAgICBwdXNoWU9mZnNldDogNTAsXHJcbiAgICAgIGJhY2tkcm9wOiB0cnVlLFxyXG4gICAgICBidXR0b25DbG9zZTogZmFsc2UsXHJcbiAgICAgIGJvdHRvbUNsb3NlOiB0cnVlLFxyXG4gICAgICBvbldpbGxEaXNtaXNzOiAoKSA9PiB7XHJcbiAgICAgICAgZGV0YWlsVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICBiYWNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRHJhZzogKCkgPT4ge1xyXG4gICAgICAgIGlmKHRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgdG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgbW9yZURldGFpbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkZXRhaWxzUGFuZS5wcmVzZW50KHthbmltYXRlOiB0cnVlfSlcclxuICAgIGRldGFpbFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICBiYWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgfSlcclxuXHJcbiAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRldGFpbHNQYW5lLmhpZGUoKVxyXG4gICAgZGV0YWlsVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIGJhY2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICB9KVxyXG59XHJcblxyXG57XHJcbiAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJykgXHJcbiAgY29uc3QgYXZhaWxhYmlsaXR5QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWF2YWlsYWJpbGl0eS1iYXInKVxyXG5cclxuICBkZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGlmKCgoZGV0YWlscy5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKyA0NSkgLSBkZXRhaWxzLnNjcm9sbFRvcCkgPCAyMDApIHtcclxuICAgICAgaWYoIWF2YWlsYWJpbGl0eUJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgICAgYXZhaWxhYmlsaXR5QmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZihhdmFpbGFiaWxpdHlCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xyXG4gICAgICBhdmFpbGFiaWxpdHlCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG57XHJcbiAgY29uc3QgdG9vbHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b29sdGlwJylcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmKGUucGF0aC5pbmNsdWRlcyh0b29sdGlwKSAmJiAhdG9vbHRpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgIHRvb2x0aXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSBpZih0b29sdGlwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgdG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbntcclxuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbnRybycpXHJcbiAgY29uc3QgcGFuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lJylcclxuICBcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMVxyXG4gICAgaW50cm8uc3R5bGUuaGVpZ2h0ID0gYCR7dmggKiAxMDB9cHhgO1xyXG4gICAgcGFuZS5zdHlsZS5oZWlnaHQgPSBgJHt2aCAqIDEwMH1weGA7XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDFcclxuICAgIGludHJvLnN0eWxlLmhlaWdodCA9IGAke3ZoICogMTAwfXB4YDtcclxuICAgIHBhbmUuc3R5bGUuaGVpZ2h0ID0gYCR7dmggKiAxMDB9cHhgO1xyXG4gIH0pO1xyXG59Il19
