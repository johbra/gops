(ns ^:figwheel-hooks gops.core
  (:require [reagent.dom :as rd]
            [re-frame.core :as rf]
            [gops.subs]
            [gops.events]
            [re-com.core :refer [v-box h-box box button label hyperlink-href]]
            ))

(enable-console-print!)

;; Model -----------------------------------------------------------------------

(defn new-score
  "Ermittelt den neuen score."
  [prize-card player1-card player2-card player-scores]
  (cond
    (= player1-card player2-card) player-scores

    (> player1-card player2-card)
    [(+ (player-scores 0) prize-card) (player-scores 1)]

    :else [(player-scores 0)(+ (player-scores 1) prize-card)]))

;; Views -----------------------------------------------------------------------

(defn score
  []
  (let [turn @(rf/subscribe [:turn])
        prize-cards @(rf/subscribe [:prize-cards])
        player-cards @(rf/subscribe [:player-cards])
        player-scores @(rf/subscribe [:player-scores])] 
    [v-box :gap "12px"
     :children [[h-box :gap "10px"
                 :children [[label :label (str "turn: " turn)] 
                            [label :label (str "prize-cards: " prize-cards)]]]
                [h-box :gap "10px"
                 :children [[label :label (str "player1: " (player-cards 0))]
                            [label :label (str "score: " (player-scores 0))]]]
                [h-box :gap "10px"
                 :children [[label :label (str "player2: " (player-cards 1))] 
                            [label :label (str "score: " (player-scores 1))]]]]]))

(defn next-state
  [prize-cards]
  (let [prize-card @(rf/subscribe [:prize-card])
        player1-card @(rf/subscribe [:player1-card])
        player2-card @(rf/subscribe [:player2-card])
        player-scores @(rf/subscribe [:player-scores])
        _ (js/console.log @re-frame.db/app-db)]
    (when (> (count prize-cards) 0)
      (rf/dispatch [:new-score
                    (new-score prize-card player1-card player2-card player-scores)])
      (rf/dispatch [:inc-turn]))))

(defn reset-game
  []
  (rf/dispatch [:initialise-db]))

(defn run-game
  []
  (let [prize-cards @(rf/subscribe [:prize-cards])
        reset-button [button
                      :class "btn-primary"
                      :on-click #(reset-game)
                      :label "Reset"]]
    [v-box :children
     [[hyperlink-href :label "Goofspiel" :class "h1"
       :href "https://en.wikipedia.org/wiki/Goofspiel"] 
      (if (> (count prize-cards) 0)
        [h-box :gap "10px" :children
         [[button
           :class "btn-primary"
           :on-click #(next-state prize-cards)
           :label "One Step"]
          reset-button
          [box :child [score]]]]
        [h-box :gap "10px" :children 
         [reset-button
          [label :label (str "Final score: "
                             @(rf/subscribe [:player-scores]))]]])]]))

;; -- Entry Point -------------------------------------------------------------

(defn ^:export main     ;; call this to bootstrap your app
  []
  (rf/dispatch-sync [:initialise-db])
  (rd/render [run-game]
             (js/document.getElementById "app")))

;; and this is what figwheel calls after each save
(defn ^:after-load re-render []
  (main))

;; this only gets called once
(defonce start-up (do (main) (js/console.log @re-frame.db/app-db ) true))


(prn "game of poor strategie!")
