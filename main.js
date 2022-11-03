if(document.URL.includes('https://www.youtube.com')) {
    try 
    {
        shorts_button = Array.from(document.getElementsByClassName('yt-simple-endpoint style-scope ytd-guide-entry-renderer')).find(x => x.getAttribute('title') == 'Shorts'); 
        shorts_button.parentNode.removeChild(shorts_button);
        shorts_mini_button = Array.from(document.getElementsByTagName('ytd-mini-guide-entry-renderer')).find(x => x.getAttribute('aria-label') == 'Shorts');
        shorts_mini_button.parentNode.removeChild(shorts_mini_button);  
    } catch {

    }
    super_title = document.getElementById('super-title'); 
    if(super_title === undefined) {
        ; 
    }
    for (child of super_title.childNodes) {
        if(child.textContent.toLowerCase().includes('shorts')) {
            next_video = document.getElementById('video-title').parentNode.parentNode; 
            window.location.href = "https://youtube.com" + next_video.getAttribute('href'); 
            break;
        }
    }
} 