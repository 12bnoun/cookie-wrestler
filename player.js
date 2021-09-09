let PlayerStateIdle = 0;
let PlayerStateBelly = 1;
let PlayerStateHit = 2;
let PlayerStateDead = 3;
let PlayerStateIntro = 4;

let BellyBounceTime = 45;
let BellyBounceAttackTime = 8;

let PlayerHitTime = 20;

const data_url = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwIiB4PSIxMzAiIHk9IjMwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iNDAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjUwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjYwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSI2MCIgZmlsbD0iIzRkMjcxYiIgLz48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTAiIHg9IjE2MCIgeT0iNjAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjcwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMjEwIiB5PSI3MCIgZmlsbD0iIzRkMjcxYiIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjIyMCIgeT0iNzAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjgwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iMTAiIHg9IjcwIiB5PSI5MCIgZmlsbD0iI2E4NmY2MCIgLz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwIiB4PSI2MCIgeT0iMTAwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAiIHg9IjYwIiB5PSIxMTAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMCIgeD0iNjAiIHk9IjEyMCIgZmlsbD0iI2E4NmY2MCIgLz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwIiB4PSI2MCIgeT0iMTMwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAiIHg9IjYwIiB5PSIxNDAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxMCIgeD0iNjAiIHk9IjE1MCIgZmlsbD0iI2E4NmY2MCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjIxMCIgeT0iMTUwIiBmaWxsPSIjNGQyNzFiIiAvPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCIgeD0iMjMwIiB5PSIxNTAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjE2MCIgZmlsbD0iI2E4NmY2MCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjIxMCIgeT0iMTYwIiBmaWxsPSIjNGQyNzFiIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMjMwIiB5PSIxNjAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSI3MCIgeT0iMTcwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTAwIiB5PSIxNzAiIGZpbGw9IiM0ZDI3MWIiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxMjAiIHk9IjE3MCIgZmlsbD0iI2E4NmY2MCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE0MCIgeT0iMTcwIiBmaWxsPSIjNGQyNzFiIiAvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMTcwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjE4MCIgZmlsbD0iI2E4NmY2MCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMTgwIiBmaWxsPSIjNGQyNzFiIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTIwIiB5PSIxODAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiB4PSIxNDAiIHk9IjE4MCIgZmlsbD0iIzRkMjcxYiIgLz48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iMTAiIHg9IjE5MCIgeT0iMTgwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjE5MCIgZmlsbD0iI2E4NmY2MCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE0MCIgeT0iMTkwIiBmaWxsPSIjNGQyNzFiIiAvPjxyZWN0IHdpZHRoPSI5MCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSIxOTAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMjAwIiBmaWxsPSIjYTg2ZjYwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTMwIiB5PSIyMDAiIGZpbGw9IiM0ZDI3MWIiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIxNDAiIHk9IjIwMCIgZmlsbD0iI2E4NmY2MCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE4MCIgeT0iMjAwIiBmaWxsPSIjNGQyNzFiIiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iMTkwIiB5PSIyMDAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIyMTAiIGZpbGw9IiNhODZmNjAiIC8+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwIiB4PSIxMzAiIHk9IjIyMCIgZmlsbD0iI2E4NmY2MCIgLz48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMTEwIiBmaWxsPSIjZTg3MDViIiAvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSIxMTAiIGZpbGw9IiNlODcwNWIiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjEyMCIgZmlsbD0iI2U4NzA1YiIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTIwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTMwIiB5PSIxMjAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjEyMCIgZmlsbD0iI2U4NzA1YiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE3MCIgeT0iMTIwIiBmaWxsPSIjZTg3MDViIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTgwIiB5PSIxMjAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIyMDAiIHk9IjEyMCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjIyMCIgeT0iMTIwIiBmaWxsPSIjZTg3MDViIiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjEzMCIgZmlsbD0iI2U4NzA1YiIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTMwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTMwIiB5PSIxMzAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjEzMCIgZmlsbD0iI2U4NzA1YiIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjE4MCIgeT0iMTMwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMjAwIiB5PSIxMzAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIyMjAiIHk9IjEzMCIgZmlsbD0iI2U4NzA1YiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjcwIiB5PSIxNDAiIGZpbGw9IiNlODcwNWIiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjE0MCIgZmlsbD0iI2U4NzA1YiIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTQwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTMwIiB5PSIxNDAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjE0MCIgZmlsbD0iI2U4NzA1YiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE3MCIgeT0iMTQwIiBmaWxsPSIjZTg3MDViIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTgwIiB5PSIxNDAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIyMDAiIHk9IjE0MCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjIyMCIgeT0iMTQwIiBmaWxsPSIjZTg3MDViIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjE1MCIgZmlsbD0iI2U4NzA1YiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMTUwIiBmaWxsPSIjZTg3MDViIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIxNTAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxMzAiIHk9IjE1MCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMTUwIiBmaWxsPSIjZTg3MDViIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSIxNTAiIGZpbGw9IiNlODcwNWIiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE1MCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjIwMCIgeT0iMTUwIiBmaWxsPSIjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMjIwIiB5PSIxNTAiIGZpbGw9IiNlODcwNWIiIC8+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjE2MCIgZmlsbD0iI2U4NzA1YiIgLz48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHg9IjE3MCIgeT0iMTYwIiBmaWxsPSIjZTg3MDViIiAvPjwvc3ZnPgo=";

var img = new Image();
img.src = data_url;

class Player
{
    constructor()
    {
        this.pos = new V2(200, -280);
        this.bellyOffset = new V2(0, 0);
        this.bellyOffset.xLast = 0;
        this.bellyOffset.yLast = 0;

        this.Reset();
    }

    Reset()
    {
        this.health = 3;
        this.score = 0;
        this.isHighScore = false;
        this.healthTimer = 15;
    }

    Tick()
    {
        switch (this.state)
        {
            case PlayerStateIdle:
            {
                if (touch.down && tkState != RenderTest)
                {
                    this.BellyBounce();
                }
            } break;

            case PlayerStateBelly:
            {
                this.timer--;
                if (this.timer == 0)
                {
                    this.Idle();
                }

                if (touch.lastDown <= 3 && this.hitConfirm && IsEnemyInBounceZone())
                {
                    // re-animate belly bounce here...
                    this.BellyBounce();
                }
            } break;

            case PlayerStateHit:
            {
                if (touch.lastDown <= 5 && this.health > 0 && IsEnemyInBounceZone())
                {
                        this.BellyBounce();
                }
                else
                {
                    this.timer--;
                    if (this.timer == 0)
                    {
                        if (this.health == 0)
                        {
                            this.bellyOffset.x = 10;
                            this.bellyOffset.y = 10;
                            tkNextState = GameOver;
                            this.state = PlayerStateDead;
                            this.timer = 15;

                            zzfx(...[,,56,,.08,.46,3,2.52,,,,,,1.7,.7,.1,,.62,.01]); // Hit 68
                        }
                        else
                        {
                            this.Idle();
                        }
                    }
                }
            } break;

            case PlayerStateDead:
            {
                this.timer--;
                if (this.timer <= 0)
                {
                    SpawnParticle(this.pos.x - 50, this.pos.y - 120, ParticleTypeDizzy);
                    this.timer = Math.floor(20);
                }
            } break;

            case PlayerStateIntro:
            {
                let startingY = -280;
                let landingY = 280;
                this.pos.Set(this.pos.x, landingY - (landingY - startingY)*(this.timer / 22));

                this.timer--;
                if (this.timer == 0)
                {
                    this.Idle();
                    this.bellyOffset.xLast = 0;
                    this.bellyOffset.yLast = 0;
                    this.bellyOffset.x = 5;
                    this.bellyOffset.y = 15;

                    zzfx(...[,,309,,.02,.32,2,.47,,,,,,1.1,.7,,.15,.99,.09]); // Hit 180
                    zzfx(...[,,511,.31,.1,1.75,4,2.74,.6,.6,,,,.7,,.2,,.75,.09]); // Explosion 239
                }
            } break;
        }

        this.UpdateBellyPhysics();
    }

    Idle()
    {
        this.pos = new V2(200, 280);
        this.angle = 0;
        this.timer = 0;
        this.hitConfirm = false;
        this.state = PlayerStateIdle;
    }

    Intro()
    {
        this.pos.Set(200, -280);
        this.timer = 22;
        this.state = PlayerStateIntro;
        zzfx(...[,,806,.05,.08,.47,2,.62,-2.8,3.1,,,,,,,.04,.63,.01]); // Jump 229
    }

    BellyBounce()
    {
        this.hitConfirm = false;
        this.bellyOffset.xLast = 0;
        this.bellyOffset.yLast = 0;
        this.bellyOffset.x = 15;
        this.bellyOffset.y = 15;
        this.timer = BellyBounceTime;
        this.state = PlayerStateBelly;

        zzfx(...[,,596,.05,,.09,1,.18,,-2.7,-4,.17,.11,,-2.1,,.1,,.02]); // Blip 48
    }

    IsBellyBounceAttacking()
    {
        return (this.state == PlayerStateBelly) &&
               ((this.timer >= BellyBounceTime - BellyBounceAttackTime));// || (this.hitConfirm && this.timer >= 7));
    }

    OnBounce(enemy)
    {
        //this.timer = 15;
        this.hitConfirm = true;
        this.bellyOffset.xLast = 0;
        this.bellyOffset.yLast = 0;
        this.bellyOffset.x = 15;
        this.bellyOffset.y = 15;
        this.score++;
        this.healthTimer--;
        hudScoreScale = 1;

        let highScore = localStorage.getItem("bigchamp.highscore");
        if (highScore == null || highScore < this.score)
        {
            localStorage.setItem("bigchamp.highscore", this.score);
            this.isHighScore = true;
        }

        zzfx(...[,,235,,,.12,,.15,-4.2,-6.7,,,,1.4,,.1,,.85,.04]); // Hit 87

        if (this.score % 10 == 0)
        {
            zzfx(...[,,714,.38,.15,1,4,4.72,.7,.2,,,,.1,.9,.2,,.89]); // Explosion 255
        }
    }

    OnHit(enemy)
    {
        if (enemy.isHeart)
        {
            if (this.health < 3)
            {
                hudHeartScales[this.health] = 1;
                this.health++;
                this.bellyOffset.x = 5;
                this.bellyOffset.y = 5;

                zzfx(...[,,716,,.02,.13,,1.71,,,636,.03,,.1,,.1,,.58,.01]); // Pickup 48
            }
        }
        else
        {
            if (this.health > 0)
            {
                this.timer = 15;
                this.health--;
                hudHeartScales[this.health] = 1;
                this.timer = PlayerHitTime;
                this.state = PlayerStateHit;
                this.bellyOffset.x = 5;
                this.bellyOffset.y = 5;

                zzfx(...[,,272,,,.16,3,2.99,-1.7,1.6,,,,1.4,-0.7,.2,,.68,.03]); // Hit 54
            }
        }
    }

    UpdateBellyPhysics()
    {
        // Super duper simple one-pointer verlet integration

        // Simulate
        let vx = (this.bellyOffset.x - this.bellyOffset.xLast);
        let vy = (this.bellyOffset.y - this.bellyOffset.yLast);
        this.bellyOffset.xLast = this.bellyOffset.x;
        this.bellyOffset.yLast = this.bellyOffset.y;
        this.bellyOffset.x += vx;
        this.bellyOffset.y += vy;

        // Constrain
        let d = this.bellyOffset.Len();
        if (d > 0)
        {
            let restLength = 0;
            let springRatio = 0.2;
            let moveMul = (d - restLength) / d;
            let move = new V2(this.bellyOffset.x*moveMul*springRatio, this.bellyOffset.y*moveMul*springRatio);
            this.bellyOffset.SubV(move);
        }
    }

    Draw()
    {
        PushMatrix(this.pos.x, this.pos.y, this.angle);

        // What follows is the DUMBEST way to draw the player...

        this.skinColor = "#b87969";//"#DC774F";
        this.outlineColor = "#A3583A";
        this.bootColor = "#111";
        this.outfitColor = "#111";
        this.eyeColor = "#FFF";
        this.pupilColor = "#000";
        this.mouthColor = "#500";
        this.lacesColor = "#FFF";

        switch (this.state)
        {
            case PlayerStateIdle:
            {
                this.DrawLeg(66, 24, 0);        // Left leg
                this.DrawBody(0, 0, 0);         // Body
                this.DrawHead(-10, -90, 0);     // Head
                this.DrawOutfit(0, 0, 0);       // Outfit
                this.DrawLeg(-20, 24, 0);       // Right leg
                this.DrawArm(-68, -20, 0);      // Arm
            } break;

            case PlayerStateBelly:
            {
                this.DrawLeg(90, 35, 30);       // Left leg
                this.DrawBody(40, -20, -15);    // Body
                this.DrawHead(-5, -100, -40);   // Head
                this.DrawOutfit(40, -20, -15);  // Outfit
                this.DrawLeg(25, 35, 30);       // Right leg
                this.DrawArm(-30, -22, 10);     // Arm
            } break;

            case PlayerStateHit:
            {
                this.DrawLeg(26, 14, -30);        // Left leg
                this.DrawBody(-20, 5, 0);         // Body
                this.DrawHead(-10, -80, 20);     // Head
                this.DrawOutfit(-20, 5, 0);       // Outfit
                this.DrawLeg(-50, 24, -35);       // Right leg
                this.DrawArm(-88, -15, -50);      // Arm
            } break;

            case PlayerStateDead:
            {
                this.DrawLeg(-6, 24, -60);        // Left leg
                this.DrawBody(-40, 15, 0);         // Body
                this.DrawHead(-20, -60, 40 + Math.sin(Date.now()*0.001)*5);     // Head
                this.DrawOutfit(-40, 15, 0);       // Outfit
                this.DrawLeg(-80, 42, -60);       // Right leg
                this.DrawArm(-108, -5, -20);      // Arm
            } break;

            case PlayerStateIntro:
            {
                this.DrawLeg(66, 24, -30);        // Left leg
                this.DrawBody(0, 0, 0);         // Body
                this.DrawHead(-10, -90, 0);     // Head
                this.DrawOutfit(0, 0, 0);       // Outfit
                this.DrawLeg(-20, 45, 30);       // Right leg
                this.DrawArm(-64, -25, 30);      // Arm
            } break;
        }

        PopMatrix();
    }

    DrawLeg(x, y, angle)
    {
        PushMatrix(x + this.bellyOffset.x*0.5, y + this.bellyOffset.y*0.5, angle);
        DrawCircle(-10, 8, 20, this.skinColor);     // Rounded top of leg
        DrawRect(-20, 46, 40, 60, this.skinColor);  // Leg
        DrawRect(-20, 56, 42, 42, this.bootColor);  // Boot
        DrawRect(-10, 45, 14, 4, this.lacesColor);  // Top lace
        DrawRect(-10, 55, 14, 4, this.lacesColor);  // Middle lace
        DrawRect(-10, 65, 14, 4, this.lacesColor);  // Bottom lace
        PopMatrix();
    }

    DrawBody(x, y, angle)
    {
        PushMatrix(x + this.bellyOffset.x, y + this.bellyOffset.y, angle);
        DrawCircle(0, 0, 80 + this.bellyOffset.x*1, this.skinColor, Math.PI, Math.PI*2);   // Torso
        DrawCircle(24, -10, 6, this.outlineColor);  // Right nipple
        DrawCircle(-4, -10, 6, this.outlineColor);  // Left nipple
        PopMatrix();
    }

    DrawOutfit(x, y, angle)
    {
        PushMatrix(x + this.bellyOffset.x, y + this.bellyOffset.y, angle);
        DrawBezierLine(-46, -58, -20, 20, -10, -20, -10, 20, this.outfitColor, 20); // Shoulder strap
        DrawCircle(-32, -9,28, this.outlineColor); // Armpit shadow
        DrawCircle(0, 0, 80 + this.bellyOffset.x*1, this.outfitColor, 0, Math.PI); // Outfit bottom
        PopMatrix();
    }

    DrawArm(x, y, angle)
    {
        PushMatrix(x + this.bellyOffset.x*0.5, y + this.bellyOffset.y*0.5, angle);
        DrawCircle(0, 0, 28, this.skinColor);   // Upper
        DrawCircle(-6, 16, 20, this.skinColor); // Lower
        PopMatrix();
    }

    DrawHead(x, y, angle)
    {
        PushMatrix(x + this.bellyOffset.x*0.5, y + this.bellyOffset.y*0.5, angle);

        //DrawRect(0, 0, 70, 70, this.skinColor); // Head
        const glasses_ = "#9b59b6";

        switch (this.state)
        {
            case PlayerStateIdle:
            case PlayerStateIntro:
            {

              ctx.drawImage(img, -50, -50, 120, 120);

              /*
              DrawRect(-14, -10, 24, 24, glasses_);
              DrawRect(18, -10, 24, 24, glasses_);
              DrawRect(-30, -10, 20, 10, glasses_);
              DrawRect(-35, -2, 10, 10, glasses_);
              DrawRect(5, -10, 20, 10, glasses_);
              DrawRect(-18, -10, 8, 16, "#fff");
              DrawRect(-10, -10, 8, 16, "#000");
              DrawRect(14, -10, 8, 16, "#fff");
              DrawRect(22, -10, 8, 16, "#000");*/
                /*
                DrawRect(4, 0, 12, 20, this.eyeColor);   // Left eye
                DrawRect(22, 0, 12, 20, this.eyeColor);   // Right eye
                DrawRect(6, 4, 8, 12, this.pupilColor);  // Left pupil
                DrawRect(24, 4, 8, 12, this.pupilColor);  // Right pupil
                DrawRect(10, 20, 40, 4, this.mouthColor);   // Mouth*/
            } break;

            case PlayerStateBelly:
            {
              ctx.drawImage(img, -50, -50, 120, 120);
              /*

              DrawRect(-14, -10, 24, 24, glasses_);
              DrawRect(18, -10, 24, 24, glasses_);
              DrawRect(-30, -10, 20, 10, glasses_);
              DrawRect(-35, -2, 10, 10, glasses_);
              DrawRect(5, -10, 20, 10, glasses_);
              DrawRect(-18, -10, 8, 16, "#fff");
              DrawRect(-10, -10, 8, 16, "#000");
              DrawRect(14, -10, 8, 16, "#fff");
              DrawRect(22, -10, 8, 16, "#000");
              /*
                DrawRect(4, 0, 12, 20, this.eyeColor);   // Left eye
                DrawRect(22, 0, 12, 20, this.eyeColor);   // Right eye
                DrawRect(5, 4, 10, 12, this.pupilColor);  // Left pupil
                DrawRect(23, 4, 10, 12, this.pupilColor);  // Right pupil
                DrawRect(10, 20, 40, 10, this.mouthColor);   // Mouth
              */
            } break;

            case PlayerStateHit:
            {
                /*
                DrawRect(4, 0, 12, 20, this.eyeColor);   // Left eye
                DrawRect(22, 0, 12, 20, this.eyeColor);   // Right eye
                DrawRect(0, 4, 10, 12, this.pupilColor);  // Left pupil
                DrawRect(28, -3, 10, 12, this.pupilColor);  // Right pupil
                DrawRect(10, 20, 40, 10, this.mouthColor);   // Mouth*/
                ctx.drawImage(img, -50, -50, 120, 120);
            } break;

            case PlayerStateDead:
            {
                /*
                DrawRect(4, 0, 4, 20, this.pupilColor, 45);   // Left eye (x)
                DrawRect(4, 0, 4, 20, this.pupilColor, -45);   // Left eye (x)
                DrawRect(22, 0, 4, 20, this.pupilColor, 45);   // Right eye (x)
                DrawRect(22, 0, 4, 20, this.pupilColor, -45);   // Right eye (x)
                DrawRect(10, 20, 40, 10, this.mouthColor);   // Mouth*/
                ctx.drawImage(img, -50, -50, 120, 120);
            } break;
        }

        PopMatrix();
    }
}
