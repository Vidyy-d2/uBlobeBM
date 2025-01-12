/// blob.js
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.href.includes('.google.com')) {
        window.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.which === 192) {
                alert("uBlobeBM failed to load on this page! Reason: Google Domain");
            }
        });
        return;
    }
    var main = 'https://blobby-boi.github.io/uBlobeBM/main.js';
    var fallback = 'https://cdn.jsdelivr.net/gh/Blobby-Boi/uBlobeBM@657c7a8/main.js';
    var fallback2 = atob("c2V0VGltZW91dCgoKSA9PiB7CiAgICBjb25zdCBmb250TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImxpbmsiKTsKICAgIGZvbnRMaW5rLnJlbCA9ICJzdHlsZXNoZWV0IjsKICAgIGZvbnRMaW5rLmhyZWYgPSAiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WYXJlbGErUm91bmQ6d2dodEA0MDAmZGlzcGxheT1zd2FwIjsKICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZm9udExpbmspOwogICAgCiAgICBsZXQgYmxvYkZyYW1lID0gbnVsbDsKICAgIGxldCBibG9iRnJhbWVDb250YWluZXIgPSBudWxsOwogICAgbGV0IGlzT3BlbmluZyA9IGZhbHNlOwogICAgbGV0IGlzQ2xvc2luZyA9IGZhbHNlOwogICAgCiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCJrZXlkb3duIiwgZnVuY3Rpb24gKGJsb2IpIHsKICAgICAgICBpZiAoYmxvYi5rZXkgPT0gIn4iICYmIGJsb2IuY3RybEtleSAmJiAhYmxvYkZyYW1lICYmICFpc0Nsb3NpbmcpIHsKICAgICAgICAgICAgaXNPcGVuaW5nID0gdHJ1ZTsgICAgICAgICAgICAKICAgICAgICAgICAgaWYgKGJsb2JGcmFtZSkgewogICAgICAgICAgICAgICAgY2xvc2VXaXRoQW5pbWF0aW9uKGJsb2JGcmFtZUNvbnRhaW5lcik7CiAgICAgICAgICAgICAgICBibG9iRnJhbWUgPSBudWxsOwogICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICB9CgogICAgICAgICAgICBhbGVydCgnVGhpcyBwYWdlIGhhcyBhIHN0cmljdCBDU1AsIHNvIHNvbWUgYm9va21hcmtsZXRzIG1heSBub3QgZnVuY3Rpb24hJyk7CiAgICAgICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwogICAgICAgICAgICBibG9iRnJhbWVDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGAKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICAgICAgICAgIHdpZHRoOiA2MDBweDsKICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7CiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OwogICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpOwogICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsKICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTsKICAgICAgICAgICAgICAgIHRvcDogNTAlOwogICAgICAgICAgICAgICAgbGVmdDogNTAlOwogICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7CiAgICAgICAgICAgIGA7CgogICAgICAgICAgICBibG9iRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJpZnJhbWUiKTsKICAgICAgICAgICAgYmxvYkZyYW1lLnN0eWxlLmNzc1RleHQgPSBgCiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7CiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICB0b3A6IDQwcHg7CiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICAgICAgYDsKICAgICAgICAgICAgCiAgICAgICAgICAgIGJsb2JGcmFtZS5vbmxvYWQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxDb2RlID0gYDwhRE9DVFlQRSBodG1sPgo8aHRtbCBsYW5nPSJlbiI+CjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPgogICAgPHRpdGxlPkJsb2JlQk08L3RpdGxlPgogICAgPHN0eWxlPgogICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZhcmVsYStSb3VuZCZkaXNwbGF5PXN3YXAnKTsKCiAgICAgICAgYm9keSB7CiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOwogICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICAgICAgfQoKICAgICAgICAuaGVhZGVyIHsKICAgICAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsKICAgICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KCiAgICAgICAgI2xvZ28tY29udGFpbmVyIHsKICAgICAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICB9CgogICAgICAgICNsb2dvIHsKICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDsKICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDsKICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OwogICAgICAgIH0KCiAgICAgICAgI2l0ZW1MaXN0VGV4dCB7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsKICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmOwogICAgICAgIH0KCiAgICAgICAgI2l0ZW1JbnB1dENvbnRhaW5lciB7CiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgfQoKCSNuZXdJdGVtSW5wdXQgewogICAJICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA1OTBweCk7CiAgCSAgICBwYWRkaW5nOiA1cHg7CgkgICAgYm9yZGVyLXJhZGl1czogNXB4OwoJICAgIG1hcmdpbi1sZWZ0OiAtNjAwcHg7Cgl9CgoJQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7CiAgICAJCSNuZXdJdGVtSW5wdXQgewogICAgICAgIAkJd2lkdGg6IGF1dG87CiAgICAgICAgCQltYXJnaW4tbGVmdDogMDsKICAgIAkJCX0KCQl9CgogICAgICAgIC5pdGVtLWxpc3QtY29udGFpbmVyIHsKICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpOwogICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvOwogICAgICAgIH0KCiAgICAgICAgLml0ZW0tbGlzdCB7CiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7CiAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgcGFkZGluZzogMDsKICAgICAgICB9CgogICAgICAgIC5pdGVtIHsKICAgICAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKICAgICAgICAgICAgcGFkZGluZzogMTBweDsKICAgICAgICB9CgogICAgICAgIC5pdGVtLWJ1dHRvbiB7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7CiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7CiAgICAgICAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgIH0KCiAgICAgICAgLnJlbW92ZS1idXR0b24gewogICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1OwogICAgICAgICAgICBjb2xvcjogd2hpdGU7CiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4OwogICAgICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7CiAgICAgICAgfQoKICAgICAgICAuZWRpdC1kaXNwbGF5LWJ1dHRvbiwgLmVkaXQtaXRlbS1idXR0b24gewogICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3OwogICAgICAgICAgICBjb2xvcjogd2hpdGU7CiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4OwogICAgICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDsKICAgICAgICB9CgogICAgICAgICNhZGRJdGVtQnV0dG9uIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDsKICAgICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDsKICAgICAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgfQoKICAgICAgICAub3ZlcmxheSB7CiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7CiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7CiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICB6LWluZGV4OiA5OTk7CiAgICAgICAgfQogICAgPC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KICAgIDxkaXYgY2xhc3M9ImhlYWRlciI+CiAgICAgICAgPGRpdiBpZD0ibG9nby1jb250YWluZXIiPgogICAgICAgICAgICA8aW1nIGlkPSJsb2dvIiBzcmM9Imh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9CbG9iYnktQm9pL1VSTFJlZGlyZWN0b3IvcmVmcy9oZWFkcy9tYWluL2Zhdmljb24uaWNvIiBhbHQ9IkxvZ28iPgogICAgICAgICAgICA8c3BhbiBpZD0iaXRlbUxpc3RUZXh0Ij5CbG9iZUJNOiBCb29rbWFya2xldCBSdW5uZXI8L3NwYW4+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBpZD0iaXRlbUlucHV0Q29udGFpbmVyIj4KICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJuZXdJdGVtSW5wdXQiIHBsYWNlaG9sZGVyPSJFbnRlciB0aGUgYm9va21hcmtsZXQgaGVyZSI+CiAgICAgICAgICAgIDxidXR0b24gaWQ9ImFkZEl0ZW1CdXR0b24iPkFkZCBCb29rbWFya2xldDwvYnV0dG9uPgogICAgICAgIDwvZGl2PgogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0ib3ZlcmxheSIgaWQ9Im92ZXJsYXkiPjwvZGl2PgoKICAgIDxkaXYgY2xhc3M9Iml0ZW0tbGlzdC1jb250YWluZXIiPgogICAgICAgIDx1bCBpZD0iaXRlbUxpc3QiIGNsYXNzPSJpdGVtLWxpc3QiPjwvdWw+CiAgICA8L2Rpdj4KCiAgICA8c2NyaXB0PgogICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7CiAgICAgICAgICAgIGxldCB1cGRhdGVkSXRlbVRleHQ7CiAgICAgICAgICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1MaXN0Jyk7CiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtSW5wdXQnKTsKICAgICAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEl0ZW1CdXR0b24nKTsKICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7CgogICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSBwcm9tcHQoJ0hvdyBkbyB5b3Ugd2FudCB0aGUgYm9va21hcmtsZXQgdG8gYmUgY2FsbGVkPycpOwogICAgICAgICAgICAgICAgaWYgKGRpc3BsYXlWYWx1ZSA9PT0gbnVsbCkgewogICAgICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICBjb25zdCBpdGVtVmFsdWUgPSBuZXdJdGVtSW5wdXQudmFsdWUudHJpbSgpOwogICAgICAgICAgICAgICAgaWYgKCFpdGVtVmFsdWUpIHsKICAgICAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgYWRkSXRlbVRvTGlzdChkaXNwbGF5VmFsdWUsIGl0ZW1WYWx1ZSk7CiAgICAgICAgICAgICAgICBzYXZlSXRlbXNUb0xvY2FsU3RvcmFnZSgpOwogICAgICAgICAgICAgICAgbmV3SXRlbUlucHV0LnZhbHVlID0gJyc7CiAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgZnVuY3Rpb24gYWRkSXRlbVRvTGlzdChkaXNwbGF5VmFsdWUsIGl0ZW1WYWx1ZSkgewogICAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7CiAgICAgICAgICAgICAgICBuZXdJdGVtLmNsYXNzTmFtZSA9ICdpdGVtJzsKCiAgICAgICAgICAgICAgICBjb25zdCBpdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7CiAgICAgICAgICAgICAgICBpdGVtQnV0dG9uLmNsYXNzTmFtZSA9ICdpdGVtLWJ1dHRvbic7CiAgICAgICAgICAgICAgICBpdGVtQnV0dG9uLnRleHRDb250ZW50ID0gZGlzcGxheVZhbHVlOwogICAgICAgICAgICAgICAgaXRlbUJ1dHRvbi50aXRsZSA9IGl0ZW1WYWx1ZTsKICAgICAgICAgICAgICAgIGl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtVmFsdWUgPSBpdGVtQnV0dG9uLnRpdGxlOwogICAgICAgICAgICAgICAgICAgIHJ1blNjcmlwdChzZWxlY3RlZEl0ZW1WYWx1ZSk7CiAgICAgICAgICAgICAgICB9KTsKCiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsKICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc05hbWUgPSAncmVtb3ZlLWJ1dHRvbic7CiAgICAgICAgICAgICAgICByZW1vdmVCdXR0b24udGV4dENvbnRlbnQgPSAnUmVtb3ZlJzsKICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICBpdGVtTGlzdC5yZW1vdmVDaGlsZChuZXdJdGVtKTsKICAgICAgICAgICAgICAgICAgICBzYXZlSXRlbXNUb0xvY2FsU3RvcmFnZSgpOwogICAgICAgICAgICAgICAgfSk7CgogICAgICAgICAgICAgICAgY29uc3QgZWRpdERpc3BsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsKICAgICAgICAgICAgICAgIGVkaXREaXNwbGF5QnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0LWRpc3BsYXktYnV0dG9uJzsKICAgICAgICAgICAgICAgIGVkaXREaXNwbGF5QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgTmFtZSc7CiAgICAgICAgICAgICAgICBlZGl0RGlzcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdEaXNwbGF5VmFsdWUgPSBwcm9tcHQoJ0VudGVyIHRoZSBuZXcgbmFtZTonLCBpdGVtQnV0dG9uLnRleHRDb250ZW50KTsKICAgICAgICAgICAgICAgICAgICBpZiAobmV3RGlzcGxheVZhbHVlICE9PSBudWxsKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBuZXdEaXNwbGF5VmFsdWU7CiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVJdGVtc1RvTG9jYWxTdG9yYWdlKCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSk7CgogICAgICAgICAgICAgICAgY29uc3QgZWRpdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsKICAgICAgICAgICAgICAgIGVkaXRJdGVtQnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0LWl0ZW0tYnV0dG9uJzsKICAgICAgICAgICAgICAgIGVkaXRJdGVtQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgQm9va21hcmtsZXQnOwogICAgICAgICAgICAgICAgZWRpdEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbVZhbHVlID0gcHJvbXB0KCdFbnRlciB0aGUgbmV3IGJvb2ttYXJrbGV0IGNvZGU6JywgaXRlbUJ1dHRvbi50aXRsZSk7CiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0l0ZW1WYWx1ZSAhPT0gbnVsbCkgewogICAgICAgICAgICAgICAgICAgICAgICBpdGVtQnV0dG9uLnRpdGxlID0gbmV3SXRlbVZhbHVlOwogICAgICAgICAgICAgICAgICAgICAgICBzYXZlSXRlbXNUb0xvY2FsU3RvcmFnZSgpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoaXRlbUJ1dHRvbik7CiAgICAgICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7CiAgICAgICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGVkaXREaXNwbGF5QnV0dG9uKTsKICAgICAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdEl0ZW1CdXR0b24pOwoKICAgICAgICAgICAgICAgIGl0ZW1MaXN0LmFwcGVuZENoaWxkKG5ld0l0ZW0pOwogICAgICAgICAgICB9CgogICAgICAgICAgICBmdW5jdGlvbiBzYXZlSXRlbXNUb0xvY2FsU3RvcmFnZSgpIHsKICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1idXR0b24nKSkubWFwKGJ1dHRvbiA9PiB7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsKICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYnV0dG9uLnRleHRDb250ZW50LAogICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBidXR0b24udGl0bGUsCiAgICAgICAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1zJywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgZnVuY3Rpb24gcnVuU2NyaXB0KHNlbGVjdGVkSXRlbVZhbHVlKSB7CiAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7CgkJICAgIAogICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7CgkJCXdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoInJ1bjoiICsgc2VsZWN0ZWRJdGVtVmFsdWUsICcqJyk7CiAgICAgICAgICAgICAgICB9LCA1MDApOwogICAgICAgICAgICB9CgogICAgICAgICAgICBjb25zdCBzdG9yZWRJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpdGVtcycpOwogICAgICAgICAgICBpZiAoc3RvcmVkSXRlbXMpIHsKICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEl0ZW1zID0gSlNPTi5wYXJzZShzdG9yZWRJdGVtcyk7CiAgICAgICAgICAgICAgICBwYXJzZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gewogICAgICAgICAgICAgICAgICAgIGFkZEl0ZW1Ub0xpc3QoaXRlbS5kaXNwbGF5LCBpdGVtLml0ZW0pOwogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH0KICAgICAgICB9KTsKICAgIDwvc2NyaXB0Pgo8L2JvZHk+CjwvaHRtbD5gOwogICAgICAgICAgICAgICAgY29uc3QgdUJsb2JlSHRtbCA9IGJsb2JGcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgYmxvYkZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7CiAgICAgICAgICAgICAgICB1QmxvYmVIdG1sLm9wZW4oKTsKICAgICAgICAgICAgICAgIHVCbG9iZUh0bWwud3JpdGUoaHRtbENvZGUpOwogICAgICAgICAgICAgICAgdUJsb2JlSHRtbC5jbG9zZSgpOwogICAgICAgICAgICB9OwoKICAgICAgICAgICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7CiAgICAgICAgICAgIGJhci5zdHlsZS5jc3NUZXh0ID0gYAogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7CiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOwogICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4OwogICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDsKICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICAgICAgY3Vyc29yOiBtb3ZlOwogICAgICAgICAgICBgOwoKICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJidXR0b24iKTsKICAgICAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gIsOXIjsKICAgICAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUuY3NzVGV4dCA9IGAKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIHRvcDogNXB4OwogICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7CiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgICAgICAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OwogICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7CiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7CiAgICAgICAgICAgIGA7CiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoIm1vdXNlZW50ZXIiLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLmNvbG9yID0gIiMwNDY5MDgiOwogICAgICAgICAgICB9KTsKICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigibW91c2VsZWF2ZSIsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUuY29sb3IgPSAiI2ZmZiI7CiAgICAgICAgICAgIH0pOwogICAgICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsIGNsb3NlSWZyYW1lKTsKCiAgICAgICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwogICAgICAgICAgICB0aXRsZVRleHQuaW5uZXJUZXh0ID0gInVCbG9iZUJNIjsKICAgICAgICAgICAgdGl0bGVUZXh0LnN0eWxlLmNzc1RleHQgPSBgCiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICB0b3A6IDUwJTsKICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTsKICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYDsKCiAgICAgICAgICAgIGJhci5hcHBlbmRDaGlsZCh0aXRsZVRleHQpOwogICAgICAgICAgICBiYXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pOwoKICAgICAgICAgICAgYmFyLmFkZEV2ZW50TGlzdGVuZXIoIm1vdXNlZG93biIsIHN0YXJ0RHJhZ2dpbmcpOwoKICAgICAgICAgICAgYmxvYkZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2JGcmFtZSk7CiAgICAgICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXIpOwoKICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChibG9iRnJhbWVDb250YWluZXIpOwoKICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsKICAgICAgICAgICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gIjEiOwogICAgICAgICAgICAgICAgYmxvYkZyYW1lQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9ICJ0cmFuc2xhdGUoLTUwJSwgLTQ3JSkgdHJhbnNsYXRlWSgwKSI7CiAgICAgICAgICAgIH0pOwogICAgICAgICAgICAKICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgICAgICAgICBpc09wZW5pbmcgPSBmYWxzZTsKICAgICAgICAgICAgfSwgMzAwKTsKICAgICAgICAgICAgCiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgaGFuZGxlTWVzc2FnZSk7CiAgICAgICAgfQogICAgfSk7CgogICAgbGV0IG9mZnNldFgsIG9mZnNldFk7CiAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlOwogICAgCiAgICBmdW5jdGlvbiBzdGFydERyYWdnaW5nKGUpIHsKICAgICAgICBjb25zdCByZWN0ID0gYmxvYkZyYW1lQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOwogICAgICAgIG9mZnNldFggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7CiAgICAgICAgb2Zmc2V0WSA9IGUuY2xpZW50WSAtIHJlY3QudG9wOwogICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlOwogICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIm1vdXNlbW92ZSIsIGRyYWcpOwogICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIm1vdXNldXAiLCBzdG9wRHJhZ2dpbmcpOwogICAgICAgIGJsb2JGcmFtZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gIm5vbmUiOwogICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnOwogICAgfQoKICAgIGZ1bmN0aW9uIGRyYWcoZSkgewogICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuOwogICAgICAgIGxldCBuZXdYID0gZS5jbGllbnRYIC0gb2Zmc2V0WDsKICAgICAgICBsZXQgbmV3WSA9IGUuY2xpZW50WSAtIG9mZnNldFk7CgogICAgICAgIG5ld1ggPSBNYXRoLm1pbihNYXRoLm1heChuZXdYLCAwKSwgd2luZG93LmlubmVyV2lkdGggLSBibG9iRnJhbWVDb250YWluZXIub2Zmc2V0V2lkdGgpOwogICAgICAgIG5ld1kgPSBNYXRoLm1pbihNYXRoLm1heChuZXdZLCAwKSwgd2luZG93LmlubmVySGVpZ2h0IC0gYmxvYkZyYW1lQ29udGFpbmVyLm9mZnNldEhlaWdodCk7CgogICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gbmV3WCArICJweCI7CiAgICAgICAgYmxvYkZyYW1lQ29udGFpbmVyLnN0eWxlLnRvcCA9IG5ld1kgKyAicHgiOwogICAgICAgIGJsb2JGcmFtZUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7CiAgICB9CgogICAgZnVuY3Rpb24gc3RvcERyYWdnaW5nKCkgewogICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTsKICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCJtb3VzZW1vdmUiLCBkcmFnKTsKICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCJtb3VzZXVwIiwgc3RvcERyYWdnaW5nKTsKICAgICAgICBibG9iRnJhbWUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICJhdXRvIjsKICAgICAgICBibG9iRnJhbWVDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZSc7CiAgICB9CgogICAgZnVuY3Rpb24gY2xvc2VJZnJhbWUoKSB7CiAgICAJaWYgKGlzT3BlbmluZyB8fCBpc0Nsb3NpbmcpIHJldHVybjsKICAgICAgICBjbG9zZVdpdGhBbmltYXRpb24oYmxvYkZyYW1lQ29udGFpbmVyKTsKICAgICAgICBibG9iRnJhbWUgPSBudWxsOwogICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgaGFuZGxlTWVzc2FnZSk7CiAgICB9CgogICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShtZXNzYWdlKSB7CiAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS50b1N0cmluZygpLnN0YXJ0c1dpdGgoInJ1bjoiKSkgewogICAgICAgICAgICBjbG9zZVdpdGhBbmltYXRpb24oYmxvYkZyYW1lQ29udGFpbmVyKTsKICAgICAgICAgICAgYmxvYkZyYW1lID0gbnVsbDsKICAgIAogICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAgICAgZXZhbChkZWNvZGVVUklDb21wb25lbnQobWVzc2FnZS5kYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgicnVuOiIsICIiKSkpOwogICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRGF0YSA9IG1lc3NhZ2UuZGF0YS50b1N0cmluZygpLnJlcGxhY2UoInJ1bjoiLCAiIik7CiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudHMgPSB7CiAgICAgICAgICAgICAgICAgICAgJyUyMCc6ICcgJywKICAgICAgICAgICAgICAgICAgICAnJTIxJzogJyEnLAogICAgICAgICAgICAgICAgICAgICclMjInOiAnIicsCiAgICAgICAgICAgICAgICAgICAgJyUyMyc6ICcjJywKICAgICAgICAgICAgICAgICAgICAnJTI0JzogJyQnLAogICAgICAgICAgICAgICAgICAgICclMjUnOiAnJScsCiAgICAgICAgICAgICAgICAgICAgJyUyNic6ICcmJywKICAgICAgICAgICAgICAgICAgICAnJTI3JzogIiciLAogICAgICAgICAgICAgICAgICAgICclMjgnOiAnKCcsCiAgICAgICAgICAgICAgICAgICAgJyUyOSc6ICcpJywKICAgICAgICAgICAgICAgICAgICAnJTJDJzogJywnLAogICAgICAgICAgICAgICAgICAgICclMkUnOiAnLicsCiAgICAgICAgICAgICAgICAgICAgJyUyRic6ICcvJywKICAgICAgICAgICAgICAgICAgICAnJTNBJzogJzonLAogICAgICAgICAgICAgICAgICAgICclM0InOiAnOycsCiAgICAgICAgICAgICAgICAgICAgJyUzQyc6ICc8JywKICAgICAgICAgICAgICAgICAgICAnJTNEJzogJz0nLAogICAgICAgICAgICAgICAgICAgICclM0UnOiAnPicsCiAgICAgICAgICAgICAgICAgICAgJyUzRic6ICc/JywKICAgICAgICAgICAgICAgICAgICAnJTQwJzogJ0AnLAogICAgICAgICAgICAgICAgICAgICclNUInOiAnWycsCiAgICAgICAgICAgICAgICAgICAgJyU1RCc6ICddJywKICAgICAgICAgICAgICAgICAgICAnJTVFJzogJ14nLAogICAgICAgICAgICAgICAgICAgICclNjAnOiAnYCcsCiAgICAgICAgICAgICAgICAgICAgJyU3Qic6ICd7JywKICAgICAgICAgICAgICAgICAgICAnJTdDJzogJ3wnLAogICAgICAgICAgICAgICAgICAgICclN0QnOiAnfScsCiAgICAgICAgICAgICAgICAgICAgJyU3RSc6ICd+JywKICAgICAgICAgICAgICAgIH07CgogICAgICAgICAgICAgICAgZm9yIChjb25zdCBbZW5jb2RlZCwgZGVjb2RlZF0gb2YgT2JqZWN0LmVudHJpZXMocmVwbGFjZW1lbnRzKSkgewogICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VEYXRhID0gbWVzc2FnZURhdGEucmVwbGFjZShuZXcgUmVnRXhwKGVuY29kZWQsICdnJyksIGRlY29kZWQpOwogICAgICAgICAgICAgICAgfQogICAgCiAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgIGV2YWwobWVzc2FnZURhdGEpOwogICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhlY3V0aW5nIGJvb2ttYXJrbGV0OicsIGVycm9yLm1lc3NhZ2UpOwogICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBleGVjdXRpbmcgdGhlIGJvb2ttYXJrbGV0LiBUcnkgZG91YmxlIGNoZWNraW5nIHRoZSBjb2RlIG9mIHRoZSBib29rbWFya2xldC4gRXJyb3I6ICcgKyBlcnJvci5tZXNzYWdlKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0sIDIwMCk7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGNsb3NlV2l0aEFuaW1hdGlvbihlbGVtZW50KSB7CiAgICAgICAgaXNDbG9zaW5nID0gdHJ1ZTsKICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAib3BhY2l0eSAwLjJzIGVhc2UiOwogICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICIwIjsKCiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7CiAgICAgICAgICAgIGlzQ2xvc2luZyA9IGZhbHNlOwogICAgICAgIH0sIDIwMCk7CiAgICB9Cn0sIDUwMCk7").replace(/Ã/g, '×');
    var blob = new Blob([fallback2], { type: 'text/javascript' });
    var blobUrl = URL.createObjectURL(blob);
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        script2.onerror = function () {
            var script3 = document.createElement('script');
            script3.src = blobUrl;
            script3.onerror = function () {
                window.addEventListener('keydown', function (event) {
                    if (event.ctrlKey && event.which === 192) {
                        alert("uBlobeBM failed to load on this page! Reason: Strict CSP");
                    }
                });
            };
            document.body.appendChild(script3);
        };
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
