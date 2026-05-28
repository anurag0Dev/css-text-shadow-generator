 const form = document.querySelector('#controls')
            const copyTailwind = document.getElementById('copyTailwind')
            const copyCss = document.getElementById('copyCss')
            const textarea = document.querySelector('textarea')
            const tailwindCode = document.getElementById('tailwindCode')
            const cssCode = document.getElementById('cssCode')
            const Allrights = document.getElementById('2026-rights')

            const contact_form = document.getElementById('contact-form')
            

            form.addEventListener('input', function (e){
                e.preventDefault()
                const shadowText = textarea.value
                const backgroudColor = form.backgroudColor.value
                const textColor = form.textColor.value
                const shadowColor = form.shadowcolor.value
                const horizontal = form.horizontal.value
                const vertical = form.vertical.value
                const blur = form.blur.value
            
                textarea.style.textShadow = `${horizontal}px ${vertical}px ${blur}px ${shadowColor}`
                cssCode.innerText = `${horizontal}px ${vertical}px ${blur}px ${shadowColor}`
                tailwindCode.innerText = `[text-shadow:${horizontal}px_${vertical}px_${blur}px_${shadowColor}]`
                

                textarea.style.color = `${textColor}`
                textarea.style.backgroundColor = backgroudColor


                const bold = form.bold.checked
                const Italic = form.Italic.checked
                const underline = form.underline.checked
                textarea.style.fontWeight = bold ? "bold" : 'normal'
                textarea.style.fontStyle = Italic ? "italic" : 'normal'
                textarea.style.textDecoration = underline ? 'underline' : 'none'
            })
            copyCss.addEventListener('click', function (){
                navigator.clipboard.writeText(cssCode.innerText)
                
                copyCss.innerText = 'Copied!'
                setTimeout(() => {
                        copyCss.innerText = 'copy'
                }, 2000);  
            })

            copyTailwind.addEventListener('click', function (){
                navigator.clipboard.writeText(tailwindCode.innerText)

                 copyTailwind.innerText = 'Copied!'
                setTimeout(() => {
                        copyTailwind.innerText = 'copy'
                }, 2000);  
            })
            
            
            //<p>©2026 TextShadow. All Rights Reserved.</p>

            const year = new Date().getFullYear()
            Allrights.innerText = `©${year} TextShadow. All Rights Reserved.`
            