<?php get_header(); ?>
<div class="homepage-wrapper">

    <main class="homepage-container">

        <div class="hero-text-container">
            <div class="gavryliuk-container">
                <!-- <img src="<?php echo get_template_directory_uri() . '/public/images/title-gavryliuk.svg' ?>" alt=""> -->
                <img src="<?php echo get_template_directory_uri() . '/public/images/title-gavryliuk-com.svg' ?>" alt="">
            </div>

            <div class="tax-email-wrapper">




                <br>


                <button class="btnc btnc--sm btnc__with-icon-on-bg">
                    Send mail
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                    </svg>
                </button>
                <br>

                <button class="btn-close__gudzyk" title="Close" aria-live="polite" tabindex="0">
                    <svg viewBox="0 0 1792 1792" style="display:block;height:22px;width:22px">
                        <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
                    </svg>
                </button>


                <h2 class="tagline">Web development for artists</h2>
                <h4 class="email"> <a href="mailto:info@gavryliuk.com"> info@gavryliuk.com</h4>
            </div>
        </div>


    </main>
</div>


<?php get_footer(); ?>