/// blob.js
document.addEventListener('DOMContentLoaded', function () {
    var main = 'https://blobby-boi.github.io/uBlobeBM/main.js';
    var fallback = 'https://cdn.jsdelivr.net/gh/Blobby-Boi/uBlobeBM@657c7a8/main.js';
    
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        script2.onerror = function () {
            var script3 = document.createElement('script');
            script3.src = "data:text/javascript;base64,CnNldFRpbWVvdXQoKCkgPT4gewogICAgY29uc3QgZm9udExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJsaW5rIik7CiAgICBmb250TGluay5yZWwgPSAic3R5bGVzaGVldCI7CiAgICBmb250TGluay5ocmVmID0gImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmFyZWxhK1JvdW5kOndnaHRANDAwJmRpc3BsYXk9c3dhcCI7CiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnRMaW5rKTsKICAgIAogICAgbGV0IGJsb2JGcmFtZSA9IG51bGw7CiAgICBsZXQgYmxvYkZyYW1lQ29udGFpbmVyID0gbnVsbDsKICAgIGxldCBpc09wZW5pbmcgPSBmYWxzZTsKICAgIGxldCBpc0Nsb3NpbmcgPSBmYWxzZTsKICAgIAogICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigia2V5ZG93biIsIGZ1bmN0aW9uIChibG9iKSB7CiAgICAgICAgaWYgKGJsb2Iua2V5ID09ICJ+IiAmJiBibG9iLmN0cmxLZXkgJiYgIWJsb2JGcmFtZSAmJiAhaXNDbG9zaW5nKSB7CiAgICAgICAgICAgIGlzT3BlbmluZyA9IHRydWU7ICAgICAgICAgICAgCiAgICAgICAgICAgIGlmIChibG9iRnJhbWUpIHsKICAgICAgICAgICAgICAgIGNsb3NlV2l0aEFuaW1hdGlvbihibG9iRnJhbWVDb250YWluZXIpOwogICAgICAgICAgICAgICAgYmxvYkZyYW1lID0gbnVsbDsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgYmxvYkZyYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7CiAgICAgICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYAogICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOwogICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4OwogICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDsKICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7CiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7CiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOwogICAgICAgICAgICAgICAgb3BhY2l0eTogMDsKICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlOwogICAgICAgICAgICAgICAgdG9wOiA1MCU7CiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7CiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsKICAgICAgICAgICAgYDsKCiAgICAgICAgICAgIGJsb2JGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImlmcmFtZSIpOwogICAgICAgICAgICBibG9iRnJhbWUuc3R5bGUuY3NzVGV4dCA9IGAKICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTsKICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIHRvcDogNDBweDsKICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgICAgICBgOwoKICAgICAgICAgICAgZmV0Y2goImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9CbG9iYnktQm9pL3VCbG9iZUJNL3JlZnMvaGVhZHMvbWFpbi9tYWluLmh0bWwiKQogICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKQogICAgICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgdUJsb2JlSHRtbCA9IGJsb2JGcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgYmxvYkZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7CiAgICAgICAgICAgICAgICAgICAgdUJsb2JlSHRtbC5vcGVuKCk7CiAgICAgICAgICAgICAgICAgICAgdUJsb2JlSHRtbC53cml0ZShodG1sKTsKICAgICAgICAgICAgICAgICAgICB1QmxvYmVIdG1sLmNsb3NlKCk7CiAgICAgICAgICAgICAgICB9KTsKCiAgICAgICAgICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwogICAgICAgICAgICBiYXIuc3R5bGUuY3NzVGV4dCA9IGAKICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4OwogICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDsKICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7CiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgICAgIGN1cnNvcjogbW92ZTsKICAgICAgICAgICAgYDsKCiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiYnV0dG9uIik7CiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmlubmVyVGV4dCA9ICLDlyI7CiAgICAgICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLmNzc1RleHQgPSBgCiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICB0b3A6IDUwJTsKICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4OwogICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOwogICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTsKICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmOwogICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlOwogICAgICAgICAgICBgOwogICAgICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCJtb3VzZWVudGVyIiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5zdHlsZS5jb2xvciA9ICIjMDQ2OTA4IjsKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoIm1vdXNlbGVhdmUiLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLmNvbG9yID0gIiNmZmYiOwogICAgICAgICAgICB9KTsKICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCBjbG9zZUlmcmFtZSk7CgogICAgICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTsKICAgICAgICAgICAgdGl0bGVUZXh0LmlubmVyVGV4dCA9ICJ1QmxvYmVCTSI7CiAgICAgICAgICAgIHRpdGxlVGV4dC5zdHlsZS5jc3NUZXh0ID0gYAogICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICAgICAgdG9wOiA1MCU7CiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7CiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsKICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmOwogICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmOwogICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICAgIGA7CgogICAgICAgICAgICBiYXIuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTsKICAgICAgICAgICAgYmFyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTsKCiAgICAgICAgICAgIGJhci5hZGRFdmVudExpc3RlbmVyKCJtb3VzZWRvd24iLCBzdGFydERyYWdnaW5nKTsKCiAgICAgICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChibG9iRnJhbWUpOwogICAgICAgICAgICBibG9iRnJhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyKTsKCiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmxvYkZyYW1lQ29udGFpbmVyKTsKCiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7CiAgICAgICAgICAgICAgICBibG9iRnJhbWVDb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICIxIjsKICAgICAgICAgICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSAidHJhbnNsYXRlKC01MCUsIC00NyUpIHRyYW5zbGF0ZVkoMCkiOwogICAgICAgICAgICB9KTsKICAgICAgICAgICAgCiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgICAgICAgICAgaXNPcGVuaW5nID0gZmFsc2U7CiAgICAgICAgICAgIH0sIDMwMCk7CiAgICAgICAgICAgIAogICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGhhbmRsZU1lc3NhZ2UpOwogICAgICAgIH0KICAgIH0pOwoKICAgIGxldCBvZmZzZXRYLCBvZmZzZXRZOwogICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTsKICAgIAogICAgZnVuY3Rpb24gc3RhcnREcmFnZ2luZyhlKSB7CiAgICAgICAgY29uc3QgcmVjdCA9IGJsb2JGcmFtZUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsKICAgICAgICBvZmZzZXRYID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0OwogICAgICAgIG9mZnNldFkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDsKICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTsKICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCJtb3VzZW1vdmUiLCBkcmFnKTsKICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCJtb3VzZXVwIiwgc3RvcERyYWdnaW5nKTsKICAgICAgICBibG9iRnJhbWUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICJub25lIjsKICAgICAgICBibG9iRnJhbWVDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJzsKICAgIH0KCiAgICBmdW5jdGlvbiBkcmFnKGUpIHsKICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjsKICAgICAgICBsZXQgbmV3WCA9IGUuY2xpZW50WCAtIG9mZnNldFg7CiAgICAgICAgbGV0IG5ld1kgPSBlLmNsaWVudFkgLSBvZmZzZXRZOwoKICAgICAgICBuZXdYID0gTWF0aC5taW4oTWF0aC5tYXgobmV3WCwgMCksIHdpbmRvdy5pbm5lcldpZHRoIC0gYmxvYkZyYW1lQ29udGFpbmVyLm9mZnNldFdpZHRoKTsKICAgICAgICBuZXdZID0gTWF0aC5taW4oTWF0aC5tYXgobmV3WSwgMCksIHdpbmRvdy5pbm5lckhlaWdodCAtIGJsb2JGcmFtZUNvbnRhaW5lci5vZmZzZXRIZWlnaHQpOwoKICAgICAgICBibG9iRnJhbWVDb250YWluZXIuc3R5bGUubGVmdCA9IG5ld1ggKyAicHgiOwogICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lci5zdHlsZS50b3AgPSBuZXdZICsgInB4IjsKICAgICAgICBibG9iRnJhbWVDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnOwogICAgfQoKICAgIGZ1bmN0aW9uIHN0b3BEcmFnZ2luZygpIHsKICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7CiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigibW91c2Vtb3ZlIiwgZHJhZyk7CiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigibW91c2V1cCIsIHN0b3BEcmFnZ2luZyk7CiAgICAgICAgYmxvYkZyYW1lLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAiYXV0byI7CiAgICAgICAgYmxvYkZyYW1lQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2UnOwogICAgfQoKICAgIGZ1bmN0aW9uIGNsb3NlSWZyYW1lKCkgewogICAgCWlmIChpc09wZW5pbmcgfHwgaXNDbG9zaW5nKSByZXR1cm47CiAgICAgICAgY2xvc2VXaXRoQW5pbWF0aW9uKGJsb2JGcmFtZUNvbnRhaW5lcik7CiAgICAgICAgYmxvYkZyYW1lID0gbnVsbDsKICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGhhbmRsZU1lc3NhZ2UpOwogICAgfQoKICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UobWVzc2FnZSkgewogICAgICAgIGlmIChtZXNzYWdlLmRhdGEudG9TdHJpbmcoKS5zdGFydHNXaXRoKCJydW46IikpIHsKICAgICAgICAgICAgY2xvc2VXaXRoQW5pbWF0aW9uKGJsb2JGcmFtZUNvbnRhaW5lcik7CiAgICAgICAgICAgIGJsb2JGcmFtZSA9IG51bGw7CiAgICAKICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgIGV2YWwoZGVjb2RlVVJJQ29tcG9uZW50KG1lc3NhZ2UuZGF0YS50b1N0cmluZygpLnJlcGxhY2UoInJ1bjoiLCAiIikpKTsKICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSBtZXNzYWdlLmRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKCJydW46IiwgIiIpOwogICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRzID0gewogICAgICAgICAgICAgICAgICAgICclMjAnOiAnICcsCiAgICAgICAgICAgICAgICAgICAgJyUyMSc6ICchJywKICAgICAgICAgICAgICAgICAgICAnJTIyJzogJyInLAogICAgICAgICAgICAgICAgICAgICclMjMnOiAnIycsCiAgICAgICAgICAgICAgICAgICAgJyUyNCc6ICckJywKICAgICAgICAgICAgICAgICAgICAnJTI1JzogJyUnLAogICAgICAgICAgICAgICAgICAgICclMjYnOiAnJicsCiAgICAgICAgICAgICAgICAgICAgJyUyNyc6ICInIiwKICAgICAgICAgICAgICAgICAgICAnJTI4JzogJygnLAogICAgICAgICAgICAgICAgICAgICclMjknOiAnKScsCiAgICAgICAgICAgICAgICAgICAgJyUyQyc6ICcsJywKICAgICAgICAgICAgICAgICAgICAnJTJFJzogJy4nLAogICAgICAgICAgICAgICAgICAgICclMkYnOiAnLycsCiAgICAgICAgICAgICAgICAgICAgJyUzQSc6ICc6JywKICAgICAgICAgICAgICAgICAgICAnJTNCJzogJzsnLAogICAgICAgICAgICAgICAgICAgICclM0MnOiAnPCcsCiAgICAgICAgICAgICAgICAgICAgJyUzRCc6ICc9JywKICAgICAgICAgICAgICAgICAgICAnJTNFJzogJz4nLAogICAgICAgICAgICAgICAgICAgICclM0YnOiAnPycsCiAgICAgICAgICAgICAgICAgICAgJyU0MCc6ICdAJywKICAgICAgICAgICAgICAgICAgICAnJTVCJzogJ1snLAogICAgICAgICAgICAgICAgICAgICclNUQnOiAnXScsCiAgICAgICAgICAgICAgICAgICAgJyU1RSc6ICdeJywKICAgICAgICAgICAgICAgICAgICAnJTYwJzogJ2AnLAogICAgICAgICAgICAgICAgICAgICclN0InOiAneycsCiAgICAgICAgICAgICAgICAgICAgJyU3Qyc6ICd8JywKICAgICAgICAgICAgICAgICAgICAnJTdEJzogJ30nLAogICAgICAgICAgICAgICAgICAgICclN0UnOiAnficsCiAgICAgICAgICAgICAgICB9OwoKICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2VuY29kZWQsIGRlY29kZWRdIG9mIE9iamVjdC5lbnRyaWVzKHJlcGxhY2VtZW50cykpIHsKICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGF0YSA9IG1lc3NhZ2VEYXRhLnJlcGxhY2UobmV3IFJlZ0V4cChlbmNvZGVkLCAnZycpLCBkZWNvZGVkKTsKICAgICAgICAgICAgICAgIH0KICAgIAogICAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgICBldmFsKG1lc3NhZ2VEYXRhKTsKICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4ZWN1dGluZyBib29rbWFya2xldDonLCBlcnJvci5tZXNzYWdlKTsKICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0FuIGVycm9yIG9jY3VyZWQgd2hpbGUgZXhlY3V0aW5nIHRoZSBib29rbWFya2xldC4gVHJ5IGRvdWJsZSBjaGVja2luZyB0aGUgY29kZSBvZiB0aGUgYm9va21hcmtsZXQuIEVycm9yOiAnICsgZXJyb3IubWVzc2FnZSk7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9LCAyMDApOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBjbG9zZVdpdGhBbmltYXRpb24oZWxlbWVudCkgewogICAgICAgIGlzQ2xvc2luZyA9IHRydWU7CiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gIm9wYWNpdHkgMC4ycyBlYXNlIjsKICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAiMCI7CgogICAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpOwogICAgICAgICAgICBpc0Nsb3NpbmcgPSBmYWxzZTsKICAgICAgICB9LCAyMDApOwogICAgfQp9LCA1MDApOwo=";
            script3.onerror = function () {
                window.addEventListener('keydown', function (event) {
                    if (event.ctrlKey && event.which === 192) {
                        alert('uBlobeBM failed to load on this page!');
                    }
                });
            };
            document.body.appendChild(script3);
        };
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
