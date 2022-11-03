if(document.URL.includes('https://www.youtube.com')) {
    window.setTimeout(() => {
        try 
        {
            shorts_button = Array.from(document.getElementsByClassName('yt-simple-endpoint style-scope ytd-guide-entry-renderer')).find(x => x.getAttribute('title') == 'Shorts'); 
            shorts_button.parentNode.removeChild(shorts_button);
            shorts_mini_button = Array.from(document.getElementsByTagName('ytd-mini-guide-entry-renderer')).find(x => x.getAttribute('aria-label') == 'Shorts');
            shorts_mini_button.parentNode.removeChild(shorts_mini_button);  
        } catch {

        }
        cursed_urls = 'https://www.youtube.com/shorts/'
        if(document.URL.includes(cursed_urls)) {
            window.location.href = 'https://www.youtube.com'; 
        }
        if(document.URL == 'https://www.youtube.com/') {
            Array.from(document.getElementsByTagName('ytd-rich-shelf-renderer')).find(x => x.hasAttribute('is-shorts')).remove(); 
        }
        window.setInterval(() => {
            for(video_preview of document.getElementsByTagName('ytd-rich-item-renderer')) {
                for(child of video_preview.children) {
                    if(Array.from(child.getElementsByTagName('a')).find(x => x.hasAttribute('href') && x.href.includes('/shorts')) !== undefined) {
                        video_preview.remove(); 
                    }  
                }
            }
        }, 1000); 
    }, 2000)
} 