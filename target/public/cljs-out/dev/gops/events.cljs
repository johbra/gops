(ns gops.events
  (:require 
   [re-frame.core :as rf]))

(rf/reg-event-db
 :inc-turn
 (fn [db [_ _]] 
   (update db :turn inc)))

(rf/reg-event-db
 :new-score
 (fn [db [_ new-score]] 
   (-> db
       (assoc :player-scores new-score)
       (update :prize-cards subvec 1)
       (update-in [:player-cards 0] subvec 1)
       (update-in [:player-cards 1] subvec 1))))

(rf/reg-event-db
 :initialise-db
 (fn [db [_ item]]
   (assoc db
          :turn 0
          :prize-cards (shuffle [1, 2, 3, 4, 5, 6, 7, 8])
          :player-cards [(shuffle[1, 2, 3, 4, 5, 6, 7, 8])
                         (shuffle[1, 2, 3, 4, 5, 6, 7, 8])]
          :player-scores [0 0])
   ))
