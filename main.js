if(document.URL.includes('https://www.youtube.com')) {
    try 
    {
        shorts_button = Array.from(document.getElementsByClassName('yt-simple-endpoint style-scope ytd-guide-entry-renderer')).find(x => x.getAttribute('title') == 'Shorts'); 
        shorts_button.parentNode.removeChild(shorts_button);
        shorts_mini_button = Array.from(document.getElementsByTagName('ytd-mini-guide-entry-renderer')).find(x => x.getAttribute('aria-label') == 'Shorts');
        shorts_mini_button.parentNode.removeChild(shorts_mini_button);  
    } catch { }
    // Redirect users to a 'safe' zone
    cursed_urls = 'https://www.youtube.com/shorts/'
    if(document.URL.includes(cursed_urls)) {
        window.location.href = 'https://www.youtube.com'; 
    }
    // Erase shorts sections from main page
    if(document.URL == 'https://www.youtube.com/') {
        Array.from(document.getElementsByTagName('ytd-rich-shelf-renderer')).find(x => x.hasAttribute('is-shorts')).remove(); 
    }

    // Erase all shorts videos from main page / subscriptions page
    window.setInterval(() => {
        for(video_preview of document.URL == 'https://www.youtube.com/' ? document.getElementsByTagName('ytd-rich-item-renderer') : document.getElementsByTagName('ytd-grid-video-renderer')) {
            for(child of video_preview.children) {
                if(Array.from(child.getElementsByTagName('a')).find(x => x.hasAttribute('href') && x.href.includes('/shorts')) !== undefined) {
                    video_preview.remove(); 
                }  
            }
        }
    }, 500); 
    // Delete shorts section from youtubers main pages

    window.setInterval(() => {
        if(document.URL.includes('https://www.youtube.com/c/') || document.URL.includes('https://www.youtube.com/user/')) {
            for(tab of document.getElementsByTagName('tp-yt-paper-tab')) {
                if(Array.from(tab.children).find(x => x.textContent.trim() == 'Shorts')) {
                    tab.remove();
                }
            }
        }
    }, 1000); 
} 